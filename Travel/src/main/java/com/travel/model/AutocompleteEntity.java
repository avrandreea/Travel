package com.travel.model;

import javax.persistence.*;


/**
 * Created by andreea.avram on 13.11.2015.
 */

@Entity(name="AutocompleteEntity")
@Table(name = "autocomplete")
@NamedQuery(
        name = "AutocompleteEntity.findAllDest",
        query = "SELECT a FROM AutocompleteEntity a"
)


public class AutocompleteEntity{

    @Id
    @Column(name = "Id")
    private String id;

    @Column(name = "Name")
    private String name;

    @Column(name = "Category")
    private String category;

    @Column(name = "Popularity")
    private Integer popularity;

    @Column(name = "Searches")
    private Integer searches;

    public AutocompleteEntity(String id, String name, String category, Integer popularity, Integer searches) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.popularity = popularity;
        this.searches = searches;
    }

    public AutocompleteEntity() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getPopularity() {
        return popularity;
    }

    public void setPopularity(Integer popularity) {
        this.popularity = popularity;
    }

    public Integer getSearches() {
        return searches;
    }

    public void setSearches(Integer searches) {
        this.searches = searches;
    }


    public Long getId() {
        return null;
    }

    public void SetId(Long id) {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AutocompleteEntity that = (AutocompleteEntity) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (category != null ? !category.equals(that.category) : that.category != null) return false;
        if (popularity != null ? !popularity.equals(that.popularity) : that.popularity != null) return false;
        return !(searches != null ? !searches.equals(that.searches) : that.searches != null);

    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (category != null ? category.hashCode() : 0);
        result = 31 * result + (popularity != null ? popularity.hashCode() : 0);
        result = 31 * result + (searches != null ? searches.hashCode() : 0);
        return result;
    }
}

