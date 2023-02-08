package com.example.journal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@ComponentScan(basePackages = {"com.example.entry", "com.example.journal"})
public class JournalApplication {

	public static void main(String[] args) {
		SpringApplication.run(JournalApplication.class, args);
	}

}

// for images use a blob

