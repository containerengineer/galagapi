package com.galagapi.infrastructure.idea.controller;

import com.galagapi.infrastructure.idea.entity.Idea;
import com.galagapi.infrastructure.idea.service.IIdeaService;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:3000")

@Controller
@RequestMapping("user")
public class IdeaController {

    @Autowired
    private IIdeaService ideaService;

    @GetMapping("idea/{id}")
    public ResponseEntity<Idea> getIdeaById(@PathVariable("id") Integer id) {
        Idea idea = ideaService.getIdeaById(id);
        return new ResponseEntity<Idea>(idea, HttpStatus.OK);
    }

    @GetMapping("ideas")
    public ResponseEntity<List<Idea>> getAllIdeas() {
        List<Idea> list = ideaService.getAllIdeas();
        return new ResponseEntity<List<Idea>>(list, HttpStatus.OK);
    }

     @PostMapping(path = "idea", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Idea> addIdea(@RequestBody Idea idea, UriComponentsBuilder builder) {
        Idea flag = ideaService.addIdea(idea);
        if (flag == null) {
            return new ResponseEntity<Idea>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/idea/{id}").buildAndExpand(idea.getId()).toUri());
       
        return new ResponseEntity<Idea>(idea, headers, HttpStatus.CREATED);
    }

    @PutMapping("idea")
    public ResponseEntity<Idea> updateIdea(@RequestBody Idea idea) {
        ideaService.updateIdea(idea);
        return new ResponseEntity<Idea>(idea, HttpStatus.OK);
    }

    @DeleteMapping("idea/{id}")
    public ResponseEntity<Void> deleteIdea(@PathVariable("id") Integer id) {
        ideaService.deleteIdea(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
