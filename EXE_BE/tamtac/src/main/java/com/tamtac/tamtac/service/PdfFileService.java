package com.tamtac.tamtac.service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.tamtac.tamtac.entity.Order;
import com.tamtac.tamtac.entity.OrderItem;
import com.tamtac.tamtac.service.Imp.PdfFileServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.Date;

@Service
public class PdfFileService implements PdfFileServiceImp {

    @Autowired
    private FirebaseService firebaseService;

    @Override
    public String createInvoice(Order order) {
        String result = "";
        try {
            String dest = order.getId() + "-" + new Date().toString() + ".pdf";
            PdfWriter writer = new PdfWriter(dest);
            PdfDocument pdf = new PdfDocument(writer);
            Document document = new Document(pdf);

            document.add(new Paragraph("\n"));
            document.add(new Paragraph("\n"));
            document.add(new Paragraph("\n"));
            document.add(new Paragraph("\n"));


            document.add(new Paragraph(removeDiacritics("HOA DON DON HANG")).setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER).setFontSize(20));
            document.add(new Paragraph(removeDiacritics("Ngày: " + order.getCreatedAt().toString())).setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER));
            document.add(new Paragraph(removeDiacritics("Khách hàng: " + order.getCustomer().getFullName())).setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER));
            document.add(new Paragraph(removeDiacritics("Dia Chi: " + order.getAddress())).setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER));
            document.add(new Paragraph("\n"));

            Table table = new Table(3)
                    .setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER)
                    .setHorizontalAlignment(com.itextpdf.layout.properties.HorizontalAlignment.CENTER);
            table.addHeaderCell(new Cell().add(new Paragraph(removeDiacritics("Tên sản phẩm")).setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER)));
            table.addHeaderCell(new Cell().add(new Paragraph(removeDiacritics("Số lượng")).setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER)));
            table.addHeaderCell(new Cell().add(new Paragraph(removeDiacritics("Giá")).setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER)));

            for (OrderItem orderItem : order.getOrderItems()) {
                table.addCell(new Cell().add(new Paragraph(removeDiacritics(orderItem.getProduct().getName())).setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER)));
                table.addCell(new Cell().add(new Paragraph(removeDiacritics(orderItem.getQuantity() + "")).setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER)));
                table.addCell(new Cell().add(new Paragraph(removeDiacritics(orderItem.getProduct().getPrice() + " VNĐ")).setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER)));
            }

            document.add(table);
            document.add(new Paragraph("\n"));

            document.add(new Paragraph("Tong tien: " + order.getSubTotal() + " VNĐ").setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER));
            document.add(new Paragraph("\n"));
            document.add(new Paragraph("----------------------------------").setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER));
            document.add(new Paragraph("\n"));

            if (!order.isPickUp()) {
                document.add(new Paragraph("Phi giao hang: " + order.getShippingFee() + " VNĐ").setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER));
            }
            if (order.getDiscountValue() != 0) {
                document.add(new Paragraph("Giam Gia ").setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER));
                document.add(new Paragraph(order.getPromotionCode() + "   " + order.getDiscountValue() + " VNĐ").setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER));
                document.add(new Paragraph("\n"));
            }
            document.add(new Paragraph("Tong Cong: " + order.getAmount() + " VNĐ").setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER));
            String qrData = "" + order.getId();
            QRCodeWriter qrCodeWriter = new QRCodeWriter();
            BitMatrix bitMatrix = qrCodeWriter.encode(qrData, BarcodeFormat.QR_CODE, 100, 100);
            String qrCodePath = "QRCode.png";
            MatrixToImageWriter.writeToPath(bitMatrix, "PNG", new File(qrCodePath).toPath());

            ImageData qrCodeImageData = ImageDataFactory.create(qrCodePath);
            Image qrCodeImage = new Image(qrCodeImageData)
                    .setHorizontalAlignment(com.itextpdf.layout.properties.HorizontalAlignment.CENTER)
                    .setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER);
            document.add(qrCodeImage.setTextAlignment(com.itextpdf.layout.properties.TextAlignment.CENTER));
            document.close();
            try {
                result = firebaseService.uploadPdfFile("./" + dest, dest);
            } catch (IOException e) {
                e.printStackTrace();
            }

            File pdfFile = new File(dest);
            if (pdfFile.delete()) {
                System.out.println("File PDF đã được xóa thành công!");
            } else {
                System.out.println("Không thể xóa file PDF.");
            }

            File qrCodeFile = new File("./QRCode.png");
            if (qrCodeFile.delete()) {
                System.out.println("Mã QR đã được xóa thành công!");
            } else {
                System.out.println("Không thể xóa mã QR.");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    private String removeDiacritics(String input) {
        String normalized = java.text.Normalizer.normalize(input, java.text.Normalizer.Form.NFD);
        return normalized.replaceAll("[^\\p{ASCII}]", "");
    }
}
