package com.exam.examPortalqz.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.examPortalqz.entities.RoleInfo;

public interface RoleRepo extends JpaRepository<RoleInfo,Long> {

}
