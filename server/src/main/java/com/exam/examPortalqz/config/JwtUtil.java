package com.exam.examPortalqz.config;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.exam.examPortalqz.entities.User;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtUtil {
	
	private String SECRET_KEY = "secret";//web token

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails.getUsername());
    }

    private String createToken(Map<String, Object> claims, String subject) {

        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
    
    
    public String parseToken(String token) {
		try {
			Claims body = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();

//			User u = new User();
//			u.setUserName(body.getSubject());
//			u.setEmail(body.getSubject());
//			u.setFirstName(body.getSubject());
//			u.setLastName(body.getSubject());
//			u.setMobileNo(body.getSubject());
//			u.setPassword(body.getSubject());
			// u.setUserRoles(body.getSubject());

//            u.setUsername(body.getSubject());
//            u.setId(Long.parseLong((String) body.get("userId")));
//            u.setRole((String) body.get("role"));

			return body.getSubject();
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Error occured in jwt" + e);
		}
		return null;
    }
    
}
