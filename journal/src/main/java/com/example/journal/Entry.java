package com.example.journal;

import java.time.LocalDate;
import java.util.Random;

public class Entry {

    // instance variables
    private long id = new Random().nextLong();
    private LocalDate dateCreated = LocalDate.now();
    private String entry;
    private String location;
    private String mood;

    // constructor(s)
    public Entry() {
    }

    public Entry(Long id,LocalDate dateCreated, String entry, String location, String mood) {
        this.id = id;
        this.dateCreated = dateCreated;
        this.entry = entry;
        this.location = location;
        this.mood = mood;
    }

    // getters and setters

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getEntry() {
        return entry;
    }

    public void setEntry(String entry) {
        this.entry = entry;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }
}
