package com.galagapi.infrastructure;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude = { 
org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration.class})
 
public class InfrastructureApplication {

	public static void main(String[] args) {
		SpringApplication.run(InfrastructureApplication.class, args);
	}
}
