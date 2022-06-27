package com.example.restservice;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

	private static final String template = "My name is %s!";
	private final AtomicLong counter = new AtomicLong();

	@GetMapping("/welcome")
	public Welcome welcome(@RequestParam(value = "name", defaultValue = "hiAkki") String name) {
		return new Welcome(counter.incrementAndGet(), String.format(template, name));
	}
}
