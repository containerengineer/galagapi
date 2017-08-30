package com.galagapi.infrastructure.idea.dao;
 
import com.galagapi.infrastructure.idea.entity.Idea;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

 
@Transactional
@Repository
public class IdeaDAO implements IIdeaDAO {
	@PersistenceContext	
	private EntityManager entityManager;	
	@Override
	public Idea getIdeaById(long id) {
		return entityManager.find(Idea.class, id);
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<Idea> getAllIdeas() {
		String hql = "FROM Idea as atcl ORDER BY atcl.id";
		return (List<Idea>) entityManager.createQuery(hql).getResultList();
	}	
	@Override
	public void addIdea(Idea idea) {
		entityManager.persist(idea);
	}
	@Override
	public void updateIdea(Idea idea) {
		Idea artcl = getIdeaById(idea.getId());
		artcl.setTitle(idea.getTitle());
		artcl.setCategory(idea.getCategory());
		entityManager.flush();
	}
	@Override
	public void deleteIdea(long id) {
		entityManager.remove(getIdeaById(id));
	}
	@Override
	public boolean ideaExists(String title, String category) {
		String hql = "FROM Idea as atcl WHERE atcl.title = ? and atcl.category = ?";
		int count = entityManager.createQuery(hql).setParameter(1, title)
		              .setParameter(2, category).getResultList().size();
		return count > 0 ? true : false;
	}
}
