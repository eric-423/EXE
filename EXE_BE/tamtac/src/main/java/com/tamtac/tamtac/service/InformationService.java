package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.InformationDTO;
import com.tamtac.tamtac.entity.Information;
import com.tamtac.tamtac.entity.User;
import com.tamtac.tamtac.exception.ResourceNotFoundException;
import com.tamtac.tamtac.payload.request.InformationRequest;
import com.tamtac.tamtac.repository.InformationRepository;
import com.tamtac.tamtac.repository.UserRepository;
import com.tamtac.tamtac.service.Imp.InformationServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InformationService implements InformationServiceImp {

    @Autowired
    private InformationRepository informationRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<InformationDTO> getAllInformation(int userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        List<Information> userInformation = user.getInformationList();
        if (userInformation.isEmpty()) {
            throw new ResourceNotFoundException("Information not found");
        }
        List<InformationDTO> result = new ArrayList<>();
        for (Information information : userInformation) {
            result.add(toDTO(information));
        }

        return result;
    }

    @Override
    public InformationDTO createInformation(int userId, InformationRequest informationRequest) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        Information information = new Information();
        List<Information> userInformation = informationRepository.findByUser_IdAndIsDefaultTrue(userId);

        if (informationRequest.getIsDefault()) {
            if(!userInformation.isEmpty()) {
                userInformation.getFirst().setDefault(false);
                informationRepository.save(userInformation.getFirst());
            }
        }

        information.setName(informationRequest.getFullName());
        information.setAddress(informationRequest.getAddress());
        information.setPhoneNumber(informationRequest.getPhone());
        information.setDefault(informationRequest.getIsDefault());
        information.setUser(userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found")));
        informationRepository.save(information);
        information.setUser(user);

        return toDTO(information);
    }

    @Override
    public InformationDTO updateInformation(int informationId, InformationRequest informationRequest) {
        Information information = informationRepository.findById(informationId).orElseThrow(() -> new ResourceNotFoundException("Information not found"));
        information.setName(informationRequest.getFullName());
        information.setAddress(informationRequest.getAddress());
        information.setPhoneNumber(informationRequest.getPhone());

        if(information.isDefault()){
            if(!informationRequest.getIsDefault()){
                throw new ResourceNotFoundException("Cannot change default information");
            }
        } else{
            if(informationRequest.getIsDefault()){
                List<Information> userInformation = informationRepository.findByUser_IdAndIsDefaultTrue(information.getUser().getId());
                Information informationDefault = userInformation.get(0);
                informationDefault.setDefault(false);
                informationRepository.save(informationDefault);
            }
        }
        List<Information> userInformation = informationRepository.findByUser_IdAndIsDefaultTrue(information.getUser().getId());
        Information informationDefault = userInformation.get(0);
        if (informationRequest.getIsDefault() && informationDefault.getId() != informationId) {
            informationDefault.setDefault(false);
            informationRepository.save(informationDefault);
        }
        informationRepository.save(information);
        return toDTO(information);
    }

    @Override
    public InformationDTO getInformationDefault(int customerId) {
        Information information = informationRepository.findByUser_IdAndIsDefaultTrue(customerId).get(0);
        if (information.isDefault()) {
            return toDTO(information);
        }
        throw new ResourceNotFoundException("Default information not found");
    }

    @Override
    public InformationDTO deleteInformation(int informationId) {
        Information information = informationRepository.findById(informationId).orElseThrow(() -> new ResourceNotFoundException("Information not found"));
        if(information.isDefault()){
            throw new ResourceNotFoundException("Cannot delete default information");
        }
        InformationDTO informationDTO = toDTO(information);
        informationRepository.delete(information);
        return informationDTO;
    }

    private InformationDTO toDTO(Information information) {

        InformationDTO informationDTO = new InformationDTO();
        informationDTO.setInformationId(information.getId());
        informationDTO.setUserId(information.getUser().getId());
        informationDTO.setFullName(information.getName());
        informationDTO.setAddress(information.getAddress());
        informationDTO.setPhone(information.getPhoneNumber());
        informationDTO.setIsDefault(information.isDefault());

        return informationDTO;
    }
}
