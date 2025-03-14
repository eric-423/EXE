package com.tamtac.tamtac.config.security;

import com.tamtac.tamtac.entity.User;
import com.tamtac.tamtac.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class UserDetailCustom implements UserDetailsService {

    @Autowired
    UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if(user==null){
            throw new UsernameNotFoundException("User can's exits");
        } else{
            return new org.springframework.security.core.userdetails.User(email,user.getPassword(), new ArrayList<>());
        }
    }
}
