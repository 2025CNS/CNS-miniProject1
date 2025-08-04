package com.example.member.controller;

import com.example.member.entity.Contact;
import com.example.member.service.ContactService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping("/member/contact")
    public String showContactForm(Model model) {
        model.addAttribute("contact", new Contact());
        return "contact"; // templates/contact.html
    }

    @PostMapping("/member/contact")
    public String submitContactForm(@ModelAttribute Contact contact) {
        contactService.save(contact);
        return "redirect:/member/contact"; // 성공 후 리다이렉트
    }
}
