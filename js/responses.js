
function getBotResponse(input) {

    // Simple responses
    if (input == "giới thiệu") {
        return "xin chào bạn , Đây là trang web bán hàng trực tuyến , trang web của chúng tôi bán các mặt hàng về mô hình ! " ;
    } else if (input == "liên hệ") {
        return "Bạn vui lòng liên hệ qua số điện thoại này : 0981867617 để biết thêm sản phẩm của chúng tôi" ;
    } else if (input == "mua hàng")  {
        return "Bạn vui lòng vào trang chủ của chúng tôi để biết thêm thông tin chi tiết " ;
    } else {
        return "Tôi là chatbox tự động , từ khóa gợi ý tìm kiếm thông tin  : giới thiệu, liên hệ, mua hàng " ;

    }
}