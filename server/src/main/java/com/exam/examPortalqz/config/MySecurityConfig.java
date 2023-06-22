package com.exam.examPortalqz.config;

import org.hibernate.StatelessSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.exam.examPortalqz.service.UserDetailsServiceSecurityImpl;

@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class MySecurityConfig extends WebSecurityConfigurerAdapter  {
	
//	@Autowired
//	private UserDetailsService	userSecurity;
	
	@Autowired
	private UserDetailsServiceSecurityImpl userSecurity;
	
	@Autowired
	private UnaAthorizedHandler	unauthorizedHandler;
	
	@Autowired
	private JwtAuthenticationFilter JwtAuthenticationFilter;
	
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		// TODO Auto-generated method stub
		return super.authenticationManagerBean();
	}
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return NoOpPasswordEncoder.getInstance();
//		
//	}
	

	
@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	
	//here we are configure it by checking the user name from database and then encode user-name
	
	auth.userDetailsService(this.userSecurity).passwordEncoder(passwordEncoder());
}

@Override
protected void configure(HttpSecurity http) throws Exception {
	
	http 
	       .csrf()
	       .disable()
	       .cors()
	       .disable()
	       .authorizeRequests()
	       //.antMatchers("/generateToken","/user/").permitAll()
	       .antMatchers("/generateToken","/user/**").permitAll()
	       .antMatchers(HttpMethod.OPTIONS).permitAll()
	       .anyRequest().authenticated()
	       .and()
	       .exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
	       .and()
	       .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	
	
	  http.addFilterBefore(JwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);     
	       
  }

}
