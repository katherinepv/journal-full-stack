package com.example.journal;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.*;

@Service
public class EntriesService {

    @Autowired
    EntriesRepository entriesRepository;

    // CREATE
    public void addEntry(Entry entry) {
        entriesRepository.save(entry);
    }

    // READ
    public Entry getEntryById(long id) {
        Optional<Entry> entry = entriesRepository.findById(id);
        if (entry.isEmpty()) {
            throw new EntryNotFoundException();
        }
        return entry.get();
    }

    public List<Entry> getAllEntries() {
        return entriesRepository.findAll();
    }

    // UPDATE
    public void updateEntry(Entry newEntry, long id) {
        if(!entriesRepository.existsById(id)) {
            throw new EntryNotFoundException();
        }
        newEntry.setId(id);
        entriesRepository.save(newEntry);
    }

    // DELETE
    @Transactional
    public void deleteEntryById(long id) {
        if (!entriesRepository.existsById(id)) {
            throw new EntryNotFoundException();
        }
        entriesRepository.deleteEntryById(id);
    }
}
