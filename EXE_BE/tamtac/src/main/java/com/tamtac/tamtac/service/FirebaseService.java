package com.tamtac.tamtac.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.*;
import com.tamtac.tamtac.config.firebase.FirebaseConfig;
import com.tamtac.tamtac.service.Imp.FirebaseServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Service
public class FirebaseService implements FirebaseServiceImp {
    @Autowired
    private FirebaseConfig firebaseConfig;

    @Override
    public String uploadPdfFile(String localFilePath, String storagePath) throws IOException {
        firebaseConfig.initializeFirebase();
        String bucketName = "four-gems.appspot.com";

        GoogleCredentials credentials = GoogleCredentials
                .fromStream(new ClassPathResource("firebase/key-firebase.json").getInputStream());


        Storage storage = StorageOptions.newBuilder()
                .setCredentials(credentials)
                .build()
                .getService();
        Bucket bucket = storage.get(bucketName);

        Path filePath = Path.of(localFilePath);
        Blob blob = bucket.create(storagePath, Files.readAllBytes(filePath), "application/pdf");


        blob.createAcl(Acl.of(Acl.User.ofAllUsers(), Acl.Role.READER));

        return blob.getMediaLink();
    }
}
