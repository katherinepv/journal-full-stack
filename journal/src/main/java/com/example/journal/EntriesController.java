package com.example.journal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EntriesController {

    @Autowired
    private EntriesService entriesService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(EntryNotFoundException exception) {
        String errorMessage = exception.getMessage();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }

    // CREATE
    @PostMapping("/entry")
    public ResponseEntity<Entry> createEntry(@RequestBody Entry entry) {
        entriesService.addEntry(entry);
        return ResponseEntity.status(HttpStatus.CREATED).body(entry);
     }
    // READ
    @GetMapping("/entries")
    public ResponseEntity<List<Entry>> getEntries(@RequestParam(defaultValue = "30") int limit) {
        return ResponseEntity.status(HttpStatus.OK).body(entriesService.getAllEntries());
    }

    @GetMapping("/entry/{id}")
    public ResponseEntity<Entry> getEntryById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(entriesService.getEntryById(id));
    }

    // UPDATE
    @PutMapping("/entry/{id}")
    public ResponseEntity<Entry> updateEntry(@RequestBody Entry newEntry, @PathVariable long id) {
        newEntry.setId(id);
        entriesService.updateEntry(newEntry, id);
        return ResponseEntity.status(HttpStatus.OK).body(newEntry);
    }

    // DELETE
    @DeleteMapping("/entry/{id}")
    public ResponseEntity<Void> deleteEntryById(@PathVariable long id) {
        entriesService.deleteEntryById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }


}
