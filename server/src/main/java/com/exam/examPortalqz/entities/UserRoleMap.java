package com.exam.examPortalqz.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="TBL_USER_ROLE_MAP")
public class UserRoleMap {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long userRoleMapId;
	
	@ManyToOne
	private RoleInfo role;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private User user;

	public Long getUserRoleMapId() {
		return userRoleMapId;
	}

	public void setUserRoleMapId(Long userRoleMapId) {
		this.userRoleMapId = userRoleMapId;
	}

	public RoleInfo getRole() {
		return role;
	}

	public void setRole(RoleInfo role) {
		this.role = role;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	

}
