package com.exam.examPortalqz.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.exam.examPortalqz.entities.User;

//it runs before every request,get jwt from header and validate
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private UserDetailsService userSecurity;

	@Autowired
	private JwtUtil jwtUtil;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		final String requestTokenHeader = request.getHeader("Authorization");
		System.out.println(requestTokenHeader);

		String userName = null ;
		String jwtToken = null;

		if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
			// if present

			jwtToken = requestTokenHeader.substring(7);

			try {
				userName = jwtUtil.extractUsername(jwtToken);
				//userName = jwtUtil.parseToken(jwtToken);
				System.out.println(userName);
			} catch (Exception e) {
				e.printStackTrace();
			}

		} else {
			System.out.println("invalid Token,not start with bearer");
		}
		if (userName != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			UserDetails userDetails = userSecurity.loadUserByUsername(userName);
			if (jwtUtil.validateToken(jwtToken, userDetails)) {

				// token valid
				UsernamePasswordAuthenticationToken userpasswordAuthentication = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());
				userpasswordAuthentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

				SecurityContextHolder.getContext().setAuthentication(userpasswordAuthentication);

			} else {
				System.out.println("Token is not valid");
			}

		}
		filterChain.doFilter(request, response);
	}

}
