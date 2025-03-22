package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.OrderDTO;
import com.tamtac.tamtac.service.Imp.AiServiceImp;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AIService implements AiServiceImp {

    @Override
    public Map<String,Object> getMetricFromAI(String orderDetailOfBranch) {
        try {
            String apiKey = "AIzaSyDps4NhMwpXhHX7x9GJpCdA-z6aTH1P3VA";
            String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + apiKey;
            URL obj = new URL(url);
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();

            con.setRequestMethod("POST");
            con.setRequestProperty("Content-Type", "application/json");
            con.setDoOutput(true);

            String jsonInputString = "{\n" +
                    "  \"contents\": [\n" +
                    "    {\n" +
                    "      \"role\": \"user\",\n" +
                    "      \"parts\": [\n" +
                    "        {\n" +
                    "          \"text\": \"Thống kê totalOrders,totalCustomers,totalItemsSold output ra số item sold và productSales gồm mảng productName và quantity,totalAmount tính dựa trên amout, total subtotal tính dựa trên subtotal,averageOrderValue,totalShippingFees,averageShippingFee,orderStatusCounts, Đang chuẩn bị, Đã giao, Đang giao, Đặt hàng thành công,topSellingProducts output productName và quantity,customerOrderCounts chỉ cần trả ra id với số lượng order kiểu id: quantity với dữ liệu đơn hàng dưới đây, hãy trả ra dạng json cho tôi " + orderDetailOfBranch + "\"\n" +
                    "        }\n" +
                    "      ]\n" +
                    "    },\n" +
                    "    {\n" +
                    "      \"role\": \"user\",\n" +
                    "      \"parts\": [\n" +
                    "        {\n" +
                    "          \"text\": \"INSERT_INPUT_HERE\"\n" +
                    "        }\n" +
                    "      ]\n" +
                    "    }\n" +
                    "  ]\n" +
                    "}";

            try (OutputStream os = con.getOutputStream()) {
                byte[] input = jsonInputString.getBytes("utf-8");
                os.write(input, 0, input.length);
            }

            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            System.out.println("Raw Response: " + response.toString());

            JSONObject jsonResponse = new JSONObject(response.toString());
            JSONArray candidates = jsonResponse.getJSONArray("candidates");
            JSONObject candidate = candidates.getJSONObject(0);
            JSONObject content = candidate.getJSONObject("content");
            JSONArray parts = content.getJSONArray("parts");

            String jsonData = parts.getJSONObject(0).getString("text").replace("```json\n", "").replace("```", "");

            JSONObject dataObject = new JSONObject(jsonData);

            Map<String, Object> resultMap = new HashMap<>();
            for (String key : dataObject.keySet()) {
                if(key.equals("topSellingProducts")){
                    Map<String, Object> topSellingProductsMap = new HashMap<>();

                    JSONArray topSellingProducts = dataObject.getJSONArray("topSellingProducts");
                    for(int i = 0; i < topSellingProducts.length(); i++){
                        JSONObject product = topSellingProducts.getJSONObject(i);
                        topSellingProductsMap.put(product.get("productName").toString(), product.get("quantity"));
                    }

                    resultMap.put("topSellingProducts", topSellingProductsMap);
                } else if(key.equals("orderStatusCounts")){
                    JSONObject orderStatusCounts = dataObject.getJSONObject("orderStatusCounts");
                    System.out.println(orderStatusCounts);
                    Map<String, Object> orderStatusCountsMap = new HashMap<>();
                    for(String status : orderStatusCounts.keySet()){
                        orderStatusCountsMap.put(status, orderStatusCounts.get(status));
                    }
                    resultMap.put("orderStatusCounts", orderStatusCountsMap);
                } else if(key.equals("customerOrderCounts")){
                    JSONObject customerOrderCounts = dataObject.getJSONObject("customerOrderCounts");
                    Map<String, Object> customerOrderCountsMap = new HashMap<>();
                    for(String status : customerOrderCounts.keySet()){
                        customerOrderCountsMap.put(status, customerOrderCounts.get(status));
                    }
                    resultMap.put("customerOrderCounts", customerOrderCountsMap);
                } else if(key.equals("productSales")){
                    JSONArray productSales = dataObject.getJSONArray("productSales");
                    Map<String, Object> totalItemsSoldMap = new HashMap<>();

                    for(int j = 0; j < productSales.length(); j++){
                        JSONObject product = productSales.getJSONObject(j);
                        totalItemsSoldMap.put(product.get("productName").toString(), product.get("quantity"));
                    }

                    resultMap.put("totalItemsSold", totalItemsSoldMap);
                }else{
                    resultMap.put(key, dataObject.get(key));
                }

            }

            for(String key : resultMap.keySet()) {
                System.out.println(key + ": " + resultMap.get(key));
            }


            return resultMap;

        } catch (Exception e) {
            throw new RuntimeException("Error while calling AI service", e);
        }
    }

}
