package com.example.journal;

public class EntryNotFoundException extends RuntimeException {
    public EntryNotFoundException(){
        super("Entry has not been found");
    }
}
