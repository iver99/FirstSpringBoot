package com.iver99.entity;


import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by chehao on 2016/12/2.
 */
@Entity
@Table(name="test")
public class Test implements Serializable
{
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String address;

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getName() {

        return name;
    }

    public String getAddress() {
        return address;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {

        return id;
    }
}
