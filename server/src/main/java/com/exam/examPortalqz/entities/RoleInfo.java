package com.exam.examPortalqz.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="TBL_ROLE")
public class RoleInfo {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long roleId;
	private String roleName;
	
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "role")
	private Set<UserRoleMap>userRoles=new HashSet<>();
	
	public Set<UserRoleMap> getUserRoles() {
		return userRoles;
	}
	public void setUserRoles(Set<UserRoleMap> userRoles) {
		this.userRoles = userRoles;
	}
	public Long getRoleId() {
		return roleId;
	}
	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	public RoleInfo(Long roleId, String roleName) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
	}
	public RoleInfo() {
		super();
	
	}
}
