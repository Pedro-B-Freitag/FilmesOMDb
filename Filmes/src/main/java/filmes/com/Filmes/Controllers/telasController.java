package filmes.com.Filmes.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class telasController {
    @GetMapping("/")
    public String iniciar(){
        return "index";
    }
    @GetMapping("/Detalhes")
    public String detalhes(){
        return "detalhes";
    }
}
