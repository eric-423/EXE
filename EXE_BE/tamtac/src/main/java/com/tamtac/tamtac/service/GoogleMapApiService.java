package com.tamtac.tamtac.service;

import com.tamtac.tamtac.entity.Branch;
import com.tamtac.tamtac.service.Imp.GoogleMapApiServiceImp;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GoogleMapApiService implements GoogleMapApiServiceImp {

    @Value("${google.map.key}")
    private String key;

    @Value("${google.map.api}")
    private String baseUrl;

    @Override
    public List<Map<String, Object>> getDistance(List<Branch> branchList, String destination) {

        try {
            StringBuilder originBuilder = new StringBuilder();
            StringBuilder destinationBuilder = new StringBuilder();
            for (Branch branch : branchList) {
                String encodedAddress = URLEncoder.encode(branch.getAddress()+"|", StandardCharsets.UTF_8.toString());
                originBuilder.append(encodedAddress);
            }

            String origin = originBuilder.toString();
            destinationBuilder.append(URLEncoder.encode(destination, StandardCharsets.UTF_8.toString()));

            try {
                String url = baseUrl + "/distancematrix/json?origins=" + origin + "&destinations=" + destinationBuilder.toString() + "&key=" + key;


                HttpClient client = HttpClient.newHttpClient();
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(new URI(url))
                        .GET()
                        .build();

                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

                System.out.println(response.body());
                JSONObject jsonResponse = new JSONObject(response.body());
                JSONArray rows = jsonResponse.getJSONArray("rows");
                List<Map<String, Object>> distances = new ArrayList<>();

                for (int i = 0; i < rows.length(); i++) {
                    JSONArray elements = rows.getJSONObject(i).getJSONArray("elements");
                    JSONObject element = elements.getJSONObject(0);
                    JSONObject distance = element.getJSONObject("distance");

                    Map<String, Object> data = new HashMap<>();
                    data.put("value", distance.getInt("value"));
                    data.put("branch", branchList.get(i));
                    distances.add(data);
                }
                return distances;
            } catch (URISyntaxException | IOException | InterruptedException e) {
                throw new RuntimeException(e.getMessage());
            }
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
