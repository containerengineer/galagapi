package com.galagapi.infrastructure.idea.dao;
import com.galagapi.infrastructure.idea.entity.Idea;
import java.util.List;
 
public interface IIdeaDAO {
    List<Idea> getAllIdeas();
    Idea getIdeaById(long id);
    void addIdea(Idea idea);
    void updateIdea(Idea idea);
    void deleteIdea(long id);
    boolean ideaExists(String title, String category);
}
 