package store.dalkak.api.refrigerator.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import store.dalkak.api.global.exception.ErrorCode;

@Getter
@AllArgsConstructor
public enum RefIngredientAddErrorCode implements ErrorCode {
    REF_ALREADY_ADDED_ERROR_CODE(400,"Ref_02","이미 냉장고에 담겨있는 재료입니다."); //example
    private final int statusCode;
    private final String errorCode;
    private final String message;
}
