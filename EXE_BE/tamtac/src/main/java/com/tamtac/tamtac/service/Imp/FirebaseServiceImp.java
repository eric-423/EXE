package com.tamtac.tamtac.service.Imp;

import java.io.IOException;

public interface FirebaseServiceImp {
    String uploadPdfFile(String localFilePath, String storagePath) throws IOException;
}
