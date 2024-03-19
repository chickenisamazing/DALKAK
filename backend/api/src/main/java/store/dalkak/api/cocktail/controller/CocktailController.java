package store.dalkak.api.cocktail.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import store.dalkak.api.cocktail.dto.response.CocktailDetailResDto;
import store.dalkak.api.cocktail.dto.response.CocktailFindResDto;
import store.dalkak.api.cocktail.service.CocktailService;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/cocktails")
public class CocktailController {

    private final CocktailService cocktailService;

    //칵테일 상세보기
    @GetMapping("/{originCocktailId}")
    public ResponseEntity<?> cocktailDetail(@PathVariable Long originCocktailId) {
        CocktailDetailResDto cocktail = cocktailService.findCocktail(originCocktailId);
        return ResponseEntity.ok(cocktail);
    }

    //칵테일 검색
    @GetMapping("/search")
    public ResponseEntity<?> searchCocktailByOption(
        @PageableDefault(value = 10) Pageable page,
        @RequestParam(value = "cocktailName", required = false) String cocktailName,
        @RequestParam(value = "ingredients", required = false) List<Long> ingredients,
        @RequestParam(value = "base", required = false) Long base,
        @RequestParam(value = "alcohol",required = false) Integer alcoholContent,
        @RequestParam(value = "color",required = false) Long color,
        @RequestParam(value = "sweetness",required = false) Integer sweetness,
        @RequestParam(value = "orderBy",required = false) Integer orderBy) {
        Page<CocktailFindResDto> cocktailSearchResDtoPage = cocktailService.getCocktailList(page, cocktailName, ingredients, base, alcoholContent, color, sweetness, orderBy);
//        log.info(ingredients.toString());
        return ResponseEntity.ok(cocktailSearchResDtoPage);
    }

//    @GetMapping
//    public ResponseEntity<?> searchIngredients(
//
//    )

}