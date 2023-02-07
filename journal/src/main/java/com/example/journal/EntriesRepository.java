package com.example.journal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntriesRepository extends JpaRepository<Entry,Long> {
    // write custom methods here
    void deleteEntryById(long id);
}
