package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.InformationDTO;
import com.tamtac.tamtac.payload.request.InformationRequest;

import java.util.List;

public interface InformationServiceImp {

    List<InformationDTO> getAllInformation(int userId);

    InformationDTO createInformation(int userId, InformationRequest informationRequest);

    InformationDTO updateInformation(int informationId, InformationRequest informationRequest);

    InformationDTO getInformationDefault(int customerId);

    InformationDTO deleteInformation(int informationId);
}
