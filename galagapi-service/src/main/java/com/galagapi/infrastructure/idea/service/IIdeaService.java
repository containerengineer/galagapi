package com.galagapi.infrastructure.idea.service;

import com.galagapi.infrastructure.idea.entity.Idea;
import java.util.List;


public interface IIdeaService {
     List<Idea> getAllIdeas();
     Idea getIdeaById(int id);
     boolean addIdea(Idea idea);
     void updateIdea(Idea idea);
     void deleteIdea(int id);
}
