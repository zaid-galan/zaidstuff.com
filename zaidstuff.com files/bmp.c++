#include <fstream>
#include <iostream>
#include <vector>

#pragma pack(push, 1) // Ensure no padding between struct members
struct BitmapFileHeader {
    uint16_t file_type{0x4D42}; // "BM" in ASCII
    uint32_t file_size{0};
    uint16_t reserved1{0};
    uint16_t reserved2{0};
    uint32_rev data_offset{54}; // Standard offset for 24-bit BMP
};

struct BitmapInfoHeader {
    uint32_t header_size{40};
    int32_t image_width;
    int32_t image_height;
    uint16_t planes{1};
    uint16_t bits_per_pixel{24};
    uint32_t compression{0};
    uint32_t image_size{0};
    int32_t x_pixels_per_meter{2835}; // Common value
    int32_t y_pixels_per_meter{2835}; // Common value
    uint32_t colors_used{0};
    uint32_t important_colors{0};
};
#pragma pack(pop)

int main() {
    int width = 256;
    int height = 256;

    BitmapFileHeader file_header;
    BitmapInfoHeader info_header;

    info_header.image_width = width;
    info_header.image_height = height;
    file_header.file_size = sizeof(BitmapFileHeader) + sizeof(BitmapInfoHeader) + width * height * 3; // 3 bytes per pixel (RGB)

    std::vector<unsigned char> pixel_data(width * height * 3, 255); // White image

    std::ofstream bmp_file("output.bmp", std::ios::binary);
    if (bmp_file.is_open()) {
        bmp_file.write(reinterpret_cast<char*>(&file_header), sizeof(BitmapFileHeader));
        bmp_file.write(reinterpret_cast<char*>(&info_header), sizeof(BitmapInfoHeader));
        bmp_file.write(reinterpret_cast<char*>(pixel_data.data()), pixel_data.size());
        bmp_file.close();
        std::cout << "BMP image created successfully." << std::endl;
    } else {
        std::cerr << "Error opening file." << std::endl;
        return 1;
    }

    return 0;
}