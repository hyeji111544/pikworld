package com.example.demo.board;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class boardController {

    @GetMapping("/")
    public String index(){
        return "index";
    }

    @GetMapping("/board/write")
    public String writeForm(){
        return "write";
    }

}
