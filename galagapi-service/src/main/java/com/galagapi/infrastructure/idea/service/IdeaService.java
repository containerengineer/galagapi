package com.galagapi.infrastructure.idea.service;
 
import com.galagapi.infrastructure.idea.dao.IIdeaDAO;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

 
import com.galagapi.infrastructure.idea.entity.Idea;
 
@Service
public class IdeaService implements IIdeaService {
	@Autowired
	private IIdeaDAO ideaDAO;
	@Override
	public Idea getIdeaById(int id) {
		Idea obj = ideaDAO.getIdeaById(id);
		return obj;
	}	
	@Override
	public List<Idea> getAllIdeas(){
		return ideaDAO.getAllIdeas();
	}
	@Override
	public synchronized Idea addIdea(Idea idea){
       if (ideaDAO.ideaExists(idea.getTitle(), idea.getCategory())) {
    	   return null;
       } else {
    	   ideaDAO.addIdea(idea);
    	   return idea;
       }
	}
	@Override
	public void updateIdea(Idea idea) {
		ideaDAO.updateIdea(idea);
	}
	@Override
	public void deleteIdea(int id) {
		ideaDAO.deleteIdea(id);
	}
}
