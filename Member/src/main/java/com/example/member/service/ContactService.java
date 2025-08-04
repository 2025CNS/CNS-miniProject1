package com.example.member.service;

import com.example.member.entity.Contact;
import com.example.member.repository.ContactRepository;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public void save(Contact contact) {
        contactRepository.save(contact);
    }
}

