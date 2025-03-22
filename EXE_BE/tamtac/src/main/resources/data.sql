INSERT INTO branch (branch_name, branch_address, branch_phone, is_parent, is_active)
VALUES ('Trụ sở chính', '146 Nguyễn Thị Kiểu, Hiệp Thành, Quận 12, Hồ Chí Minh, Việt Nam', '028-1234-5678', true, true),
       ('Chi nhánh Miền Tây', '85 Cô Giang, Phường Cô Giang, Quận 1, Hồ Chí Minh, Việt Nam', '028-9876-5432', false, true),
       ('Chi nhánh Miền Bắc', '789 Đường Trần Hưng Đạo, Quận 5, TP. Hồ Chí Minh', '028-5555-1234', false, true),
       ('Chi nhánh Miền Trung', '101 Đường Nguyễn Văn Cừ, Quận 4, TP. Hồ Chí Minh', '028-3210-9876', false, true),
       ('Chi nhánh Đông Nam Á', '202 Đường Lê Văn Sỹ, Quận Phú Nhuận, TP. Hồ Chí Minh', '028-6543-2109', false, true),
       ('Chi nhánh Bắc Mỹ', '303 Đường Phạm Ngọc Thạch, Quận 3, TP. Hồ Chí Minh', '028-4567-8901', false, true),
       ('Chi nhánh Trung tâm', '404 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh', '028-7890-1234', false, true),
       ('Chi nhánh Phía Bắc', '505 Đường Võ Văn Tần, Quận 3, TP. Hồ Chí Minh', '028-1598-7534', false, true),
       ('Chi nhánh Tây Nam', '606 Đường Cao Thắng, Quận 10, TP. Hồ Chí Minh', '028-7531-8642', false, true),
       ('Chi nhánh Đông Bắc', '707 Đường Trần Bình Trọng, Quận 5, TP. Hồ Chí Minh', '028-8529-7410', false, true);

INSERT INTO role (role_name)
VALUES ('ADMIN'),
       ('MANAGER'),
       ('FRANCHISEE_OWNER'),
       ('CUSTOMER'),
       ('SHIPPER'),
       ('WORKER');


INSERT INTO warehouse (warehouse_name, branch_id)
VALUES ('128/9, Đường Lê Văn Sỹ, Quận 3, TP. Hồ Chí Minh', 3),
       ('435/12, Đường Phố Huế, Quận Hai Bà Trưng, Hà Nội', 7),
       ('78/103, Đường Nguyễn Văn Linh, Thành phố Đà Nẵng', 1),
       ('1024/72, Đường Trần Khánh Dư, Thành phố Nha Trang', 5),
       ('21/22, Đường Nguyễn Thái Học, Thành phố Huế', 9),
       ('Đường Hùng Vương, Thành phố Cần Thơ', 2),
       ('16/27, Đường Lê Lai, Thành phố Hải Phòng', 8),
       ('14, Đường Nguyễn Tất Thành, Thành phố Vũng Tàu', 4),
       ('73/2/8, Đường Trần Phú, Thành phố Quy Nhơn', 10),
       ('Đường Ngô Quyền, Thành phố Biên Hòa, Đồng Nai', 6);


INSERT INTO material_type (material_type_name)
VALUES ('Rau củ'),
       ('Thịt'),
       ('Hải sản'),
       ('Gia vị'),
       ('Ngũ cốc');

INSERT INTO material (material_name, material_type_id)
VALUES ('thịt nướng', 2),
       ('cà chua', 1),
       ('tôm', 3),
       ('mì chính', 4),
       ('gạo', 5),
       ('thịt bò', 2),
       ('cà rốt', 1),
       ('cá hồi', 3),
       ('muối', 4),
       ('bún', 5);

INSERT INTO utensils_type (utensils_type_name)
VALUES ('Bát'),
       ('Đĩa'),
       ('Thìa'),
       ('Dĩa'),
       ('Nồi'),
       ('Chảo'),
       ('Dao'),
       ('Muỗng'),
       ('Khay'),
       ('Kẹp');

INSERT INTO cooking_utensils (cooking_utensils_name, cooking_utensils_quantity, utensils_type_id, warehouse_id)
VALUES ('Bát nhựa', 50, 1, 1),
       ('Bát nhựa', 50, 1, 2),
       ('Bát nhựa', 50, 1, 3),
       ('Bát nhựa', 50, 1, 4),
       ('Bát nhựa', 50, 1, 5),
       ('Bát nhựa', 50, 1, 6),
       ('Bát nhựa', 50, 1, 7),
       ('Bát nhựa', 50, 1, 8),
       ('Bát nhựa', 50, 1, 9),
       ('Bát nhựa', 50, 1, 10),
       ('Đĩa sứ', 75, 2, 1),
       ('Đĩa sứ', 75, 2, 2),
       ('Đĩa sứ', 75, 2, 3),
       ('Đĩa sứ', 75, 2, 4),
       ('Đĩa sứ', 75, 2, 5),
       ('Đĩa sứ', 75, 2, 6),
       ('Đĩa sứ', 75, 2, 7),
       ('Đĩa sứ', 75, 2, 8),
       ('Đĩa sứ', 75, 2, 9),
       ('Đĩa sứ', 75, 2, 10),
       ('Thìa inox', 100, 3, 1),
       ('Thìa inox', 100, 3, 2),
       ('Thìa inox', 100, 3, 3),
       ('Thìa inox', 100, 3, 4),
       ('Thìa inox', 100, 3, 5),
       ('Thìa inox', 100, 3, 6),
       ('Thìa inox', 100, 3, 7),
       ('Thìa inox', 100, 3, 8),
       ('Thìa inox', 100, 3, 9),
       ('Thìa inox', 100, 3, 10),
       ('Dĩa nhựa', 60, 4, 1),
       ('Dĩa nhựa', 60, 4, 2),
       ('Dĩa nhựa', 60, 4, 3),
       ('Dĩa nhựa', 60, 4, 4),
       ('Dĩa nhựa', 60, 4, 5),
       ('Dĩa nhựa', 60, 4, 6),
       ('Dĩa nhựa', 60, 4, 7),
       ('Dĩa nhựa', 60, 4, 8),
       ('Dĩa nhựa', 60, 4, 9),
       ('Dĩa nhựa', 60, 4, 10),
       ('Nồi cơm điện', 30, 5, 1),
       ('Nồi cơm điện', 30, 5, 2),
       ('Nồi cơm điện', 30, 5, 3),
       ('Nồi cơm điện', 30, 5, 4),
       ('Nồi cơm điện', 30, 5, 5),
       ('Nồi cơm điện', 30, 5, 6),
       ('Nồi cơm điện', 30, 5, 7),
       ('Nồi cơm điện', 30, 5, 8),
       ('Nồi cơm điện', 30, 5, 9),
       ('Nồi cơm điện', 30, 5, 10),
       ('Chảo chống dính', 25, 6, 1),
       ('Chảo chống dính', 25, 6, 2),
       ('Chảo chống dính', 25, 6, 3),
       ('Chảo chống dính', 25, 6, 4),
       ('Chảo chống dính', 25, 6, 5),
       ('Chảo chống dính', 25, 6, 6),
       ('Chảo chống dính', 25, 6, 7),
       ('Chảo chống dính', 25, 6, 8),
       ('Chảo chống dính', 25, 6, 9),
       ('Chảo chống dính', 25, 6, 10),
       ('Dao bếp', 40, 7, 1),
       ('Dao bếp', 40, 7, 2),
       ('Dao bếp', 40, 7, 3),
       ('Dao bếp', 40, 7, 4),
       ('Dao bếp', 40, 7, 5),
       ('Dao bếp', 40, 7, 6),
       ('Dao bếp', 40, 7, 7),
       ('Dao bếp', 40, 7, 8),
       ('Dao bếp', 40, 7, 9),
       ('Dao bếp', 40, 7, 10),
       ('Muỗng gỗ', 80, 8, 1),
       ('Muỗng gỗ', 80, 8, 2),
       ('Muỗng gỗ', 80, 8, 3),
       ('Muỗng gỗ', 80, 8, 4),
       ('Muỗng gỗ', 80, 8, 5),
       ('Muỗng gỗ', 80, 8, 6),
       ('Muỗng gỗ', 80, 8, 7),
       ('Muỗng gỗ', 80, 8, 8),
       ('Muỗng gỗ', 80, 8, 9),
       ('Muỗng gỗ', 80, 8, 10),
       ('Khay inox', 20, 9, 1),
       ('Khay inox', 20, 9, 2),
       ('Khay inox', 20, 9, 3),
       ('Khay inox', 20, 9, 4),
       ('Khay inox', 20, 9, 5),
       ('Khay inox', 20, 9, 7),
       ('Khay inox', 20, 9, 8),
       ('Khay inox', 20, 9, 9),
       ('Khay inox', 20, 9, 6),
       ('Khay inox', 20, 9, 10),
       ('Kẹp thức ăn', 15, 10, 1),
       ('Kẹp thức ăn', 15, 10, 2),
       ('Kẹp thức ăn', 15, 10, 3),
       ('Kẹp thức ăn', 15, 10, 4),
       ('Kẹp thức ăn', 15, 10, 5),
       ('Kẹp thức ăn', 15, 10, 6),
       ('Kẹp thức ăn', 15, 10, 7),
       ('Kẹp thức ăn', 15, 10, 8),
       ('Kẹp thức ăn', 15, 10, 9),
       ('Kẹp thức ăn', 15, 10, 10);


INSERT INTO product_type (product_type_name)
VALUES ('Món chính'),
       ('Món phụ'),
       ('Món tráng miệng'),
       ('Món khai vị'),
       ('Món nước');

INSERT INTO product (product_name, product_description, product_price, product_type_id, product_image, create_date,
                     update_date, is_active)
VALUES ('Cơm tấm sườn nướng', 'Món cơm tấm với sườn nướng thơm ngon, ăn kèm với nước mắm.', 60000, 1,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fco%CC%9Bm%20ta%CC%82%CC%81m%20su%CC%9Bo%CC%9B%CC%80n%20nu%CC%9Bo%CC%9B%CC%81ng.jpeg?alt=media&token=c80305bb-9853-44e5-a068-80470d3b6441",
        NOW(), NOW(), true),
       ('Cơm tấm bì chả', 'Món cơm tấm với bì heo và chả trứng, ăn kèm dưa leo.', 65000, 1,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fco%CC%9Bm%20bi%CC%80%20cha%CC%89.png?alt=media&token=005db2ec-fad3-49b8-aebe-f00fa0b7cd6f",
        NOW(), NOW(), true),
       ('Cơm tấm thịt kho trứng', 'Món cơm tấm với thịt kho và trứng ốp la.', 70000, 1,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fco%CC%9Bm%20thi%CC%A3t%20kho%20tru%CC%9B%CC%81ng.jpg?alt=media&token=2ba6f865-8891-470a-ba7e-15e882aa92c6",
        NOW(), NOW(), true),
       ('Cơm tấm gà nướng', 'Món cơm tấm với gà nướng, thơm ngon và hấp dẫn.', 65000, 1,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fco%CC%9Bm%20ta%CC%82%CC%81m%20ga%CC%80%20nu%CC%9Bo%CC%9B%CC%81ng.jpg?alt=media&token=d1335d15-cf38-43eb-9dda-3d875b8e103e",
        NOW(), NOW(), true),
       ('Cơm tấm chả lụa', 'Món cơm tấm với chả lụa, ăn kèm với rau sống và nước mắm.', 60000, 1,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2FFirefly_3d5b27e4-de21-4412-a19b-56d29567b412.jpeg?alt=media&token=2ea0fcf1-a28e-42c3-b0d8-1a22eb83e90c",
        NOW(), NOW(), true),
       ('Cơm tấm xíu mại', 'Món cơm tấm với xíu mại và nước sốt đặc biệt.', 70000, 1,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fco%CC%9Bm%20ta%CC%82%CC%81m%20xi%CC%81u%20ma%CC%A3i.png?alt=media&token=a3febfde-02ea-4c7b-9598-eeb514393eb5",
        NOW(), NOW(), true),
       ('Cơm tấm đùi gà', 'Món cơm tấm với đùi gà chiên giòn, thơm ngon.', 75000, 1,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fco%CC%9Bm%20ta%CC%82%CC%81m%20%C4%91u%CC%80i%20ga%CC%80.jpg?alt=media&token=72168071-853a-43ea-b284-34801f189af8",
        NOW(), NOW(), true),
       ('Cơm tấm hải sản', 'Món cơm tấm với hải sản tươi ngon, ăn kèm rau sống.', 80000, 1,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fco%CC%9Bm%20ta%CC%82%CC%81m%20ha%CC%89i%20sa%CC%89n.jpeg?alt=media&token=46b89491-943b-437d-99d2-15d105c64f23",
        NOW(), NOW(), true),
       ('Bánh flan', 'Món tráng miệng mềm mịn với caramel.', 20000, 3,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fba%CC%81nh%20plan.jpeg?alt=media&token=942f1fed-7774-496c-acfe-c6bfcae3088f",
        NOW(), NOW(), true),
       ('Canh chua cá', 'Món phụ với cá và rau quả trong nước canh chua.', 40000, 2,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fcanh%20chua%20ca%CC%81.jpeg?alt=media&token=84a9c4ed-5c9e-46c0-bbca-e04c099dc870",
        NOW(), NOW(), true),
       ('Trà sữa', 'Món nước ngọt mát lạnh với trà và sữa.', 25000, 5,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Ftra%CC%80%20su%CC%9B%CC%83a.jpeg?alt=media&token=a8bf0211-07de-4ff3-8c08-7b22c7a9c75d",
        NOW(), NOW(), true),
       ('Phở bò', 'Món chính nổi tiếng với nước dùng và thịt bò.', 60000, 1,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fpho%CC%9B%CC%89%20bo%CC%80.jpeg?alt=media&token=d4d03223-6c27-45f6-8044-6deb2da8dabb",
        NOW(), NOW(), true),
       ('Mì xào hải sản', 'Món phụ với mì xào và hải sản tươi ngon.', 55000, 2,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fmi%CC%80%20xa%CC%80o%20ha%CC%89i%20sa%CC%89n.jpeg?alt=media&token=72727e47-7dc0-4ba8-a7a2-e484cb9c4da7",
        NOW(), NOW(), true),
       ('Kem tươi', 'Món tráng miệng mát lạnh, ngọt ngào.', 15000, 3,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fkem.jpeg?alt=media&token=0399f618-29d1-47d8-9886-7687fdcfe0fd",
        NOW(), NOW(), true),
       ('Salad rau củ', 'Món khai vị tươi mát với rau củ và nước sốt.', 35000, 4,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fsalad.jpeg?alt=media&token=1bba0cfe-10c6-42b3-b305-96615b1f0810",
        NOW(), NOW(), true),
       ('Nước ép trái cây', 'Món nước dinh dưỡng từ trái cây tươi.', 30000, 5,
        "https://firebasestorage.googleapis.com/v0/b/four-gems.appspot.com/o/product%20image%2Fnuoc-ep-trai-cay.jpeg?alt=media&token=4074e55d-f00b-4298-a13a-bcfd939499a5",
        NOW(), NOW(), true);


INSERT INTO revenue (revenue_amount, revenue_date, revenue_status, revenue_target, branch_id)
VALUES (1320000, NOW(), true, 1300000, 1),
       (2320000, NOW(), false, 300000, 2),
       (2450000, NOW(), false, 300000, 3),
       (2230000, NOW(), false, 250000, 4),
       (3340000, NOW(), true, 300000, 5),
       (1140000, NOW(), true, 100000, 6),
       (3240000, NOW(), true, 200000, 7),
       (2420000, NOW(), true, 200000, 8),
       (3310000, NOW(), true, 200000, 9),
       (1530000, NOW(), false, 200000, 10);


INSERT INTO kpi (kpi_amount, kpi_date, kpi_status, kpi_target, branch_id)
VALUES (150000, '2025-01-01', true, 200000, 1),
       (120000, '2025-01-01', false, 150000, 2),
       (90000, '2025-01-01', true, 100000, 3),
       (80000, '2025-01-01', true, 90000, 4),
       (110000, '2025-01-01', false, 130000, 5),
       (95000, '2025-01-01', true, 100000, 6),
       (70000, '2025-01-01', true, 80000, 7),
       (60000, '2025-01-01', false, 70000, 8),
       (50000, '2025-01-01', true, 60000, 9),
       (45000, '2025-01-01', true, 50000, 10);

INSERT INTO member_association (member_association_description, member_association_name, member_association_point)
VALUES ('Thành viên thường', 'MEMBER', 10),
       ('Thành viên VIP 1', 'VIP_1', 20),
       ('Thành viên VIP 2', 'VIP_2', 20),
       ('Thành viên VIP 3', 'VIP_3', 20),
       ('Thành viên VIP 4', 'VIP_4', 20),
       ('Thành viên cao cấp', 'VIP_VIP_VIP', 30),
       ('Chủ cửa hàng', 'GOD', 40);

INSERT INTO user (user_address, created_date, user_date_of_birth, user_email, email_verify, user_full_name, is_active,
                  member_point, user_note, user_password, user_phone, phone_verify, refresh_token,
                  member_association_id)
VALUES ('123/123', NOW(), '1999-01-01', 'An@gmail.com', true, 'An', true, 999999999, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 7),
       ('123/123', NOW(), '1997-01-01', 'Huy@gmail.com', true, 'Huy', true, 999999999, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 6),
       ('123/123', NOW(), '1999-01-01', 'Duy@gmail.com', true, 'Duy', true, 999999999, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 6),
       ('123/123', NOW(), '1999-01-01', 'Trung@gmail.com', true, 'Trung', true, 999999999, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 6),
       ('123/123', NOW(), '1999-01-01', 'BaoAnh@gmail.com', true, 'BaoAnh', true, 999999999, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 6),
       ('123/123', NOW(), '1999-01-01', 'Customer1@gmail.com', true, 'Cus1', true, 0, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 1),
       ('123/123', NOW(), '1999-01-01', 'Customer2@gmail.com', true, 'Cus2', true, 0, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 1),
       ('123/123', NOW(), '1999-01-01', 'Customer3@gmail.com', true, 'Cus3', true, 0, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 1),
       ('123/123', NOW(), '1999-01-01', 'Customer4@gmail.com', true, 'Cu4', true, 0, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 1),
       ('123/123', NOW(), '1999-01-01', 'Customer5@gmail.com', true, 'Cu5', true, 0, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 1),
       ('123/123', NOW(), '1999-01-01', 'Staff@gmail.com', true, 'Staff', true, 0, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 1),
       ('123/123', NOW(), '1999-01-01', 'Admin@gmail.com', true, 'Admin', true, 0, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 1),
       ('123/123', NOW(), '1999-01-01', 'Frachise1@gmail.com', true, 'Frachise', true, 0, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 1),
       ('123/123', NOW(), '1999-01-01', 'Frachise2@gmail.com', true, 'Frachise', true, 0, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 1),
       ('123/123', NOW(), '1999-01-01', 'Frachise3@gmail.com', true, 'Frachise', true, 0, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 1),
       ('123/123', NOW(), '1999-01-01', 'Frachise4@gmail.com', true, 'Frachise', true, 0, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 1),
       ('123/123', NOW(), '1999-01-01', 'Frachise5@gmail.com', true, 'Frachise', true, 0, 'Note',
        '$2a$12$/G6eYAv79n9pawGI4.Hly.T143Ay79zYEiLE0B9hIdcBsBpA3C4mW',
        '1234567890', true, '', 1),
       ('Vinhome Granpark BS9', NOW(), '2003-02-04', 'ngocanpro1234321@gmail.com', true, 'Trinh Dinh Ngoc An', true, 0, 'Note',
        '$2a$12$OBekG.NZa2xPKsMlpSNSmewVI/1cq.MJLpJBhahyEXRcGYst7fRwO',
        '9999', true, '', 1);

INSERT
INTO contract (contract_end_date, contract_ref_link, contract_start_date, contract_status, contract_term,
               branch_id, user_id)
VALUES ('3025-01-01', 'https://www.google.com', '2025-01-01', true, '5 years', 1, 1),
       ('3025-01-01',
        'https://www.google.com',
        '2025-01-01', true, '5 years', 2,
        13),
       ('3025-01-01',
        'https://www.google.com',
        '2025-01-01', true, '5 years', 3,
        14),
       ('3025-01-01',
        'https://www.google.com',
        '2025-01-01', true, '5 years', 4,
        15),
       ('3025-01-01',
        'https://www.google.com',
        '2025-01-01', true, '5 years', 5,
        16),
       ('3025-01-01',
        'https://www.google.com',
        '2025-01-01', true, '5 years', 6,
        17),
       ('3025-01-01',
        'https://www.google.com',
        '2025-01-01', true, '5 years', 7,
        17),
       ('3025-01-01',
        'https://www.google.com',
        '2025-01-01', true, '5 years', 8,
        15),
       ('3025-01-01',
        'https://www.google.com',
        '2025-01-01', true, '5 years', 9,
        13),
       ('3025-01-01',
        'https://www.google.com',
        '2025-01-01', true, '5 years', 10,
        14);

INSERT INTO information (is_default, user_id, information_address, information_name, information_phone)
VALUES (true, 1, '123/123', '4 bể là nhà', '1234567890'),
       (true, 2, '123/123', '4 bể là nhà', '1234567890'),
       (true, 3, '123/123', '4 bể là nhà', '1234567890'),
       (true, 4, '123/123', '4 bể là nhà', '1234567890'),
       (true, 5, '123/123', '4 bể là nhà', '1234567890'),
       (true, 6, '123/123', '4 bể là nhà', '1234567890'),
       (true, 7, '123/123', '4 bể là nhà', '1234567890'),
       (true, 8, '123/123', '4 bể là nhà', '1234567890'),
       (true, 9, '123/123', '4 bể là nhà', '1234567890'),
       (true, 10, '123/123', '4 bể là nhà', '1234567890'),
       (true, 11, '123/123', '4 bể là nhà', '1234567890'),
       (true, 12, '123/123', '4 bể là nhà', '1234567890'),
       (true, 13, '123/123', '4 bể là nhà', '1234567890'),
       (true, 14, '123/123', '4 bể là nhà', '1234567890'),
       (true, 15, '123/123', '4 bể là nhà', '1234567890'),
       (true, 16, '123/123', '4 bể là nhà', '1234567890'),
       (true, 17, '123/123', '4 bể là nhà', '1234567890');

INSERT INTO order_status (order_status_name)
VALUES ('Đang chuẩn bị'),
       ('Đang giao'),
       ('Đã giao'),
       ('Đã hủy'),
       ('Đặt Hàng Thành Công'),
       ('Chờ Thanh Toán');



INSERT INTO payment_method (payment_method_name)
VALUES ('Thanh toán khi nhận hàng'),
       ('Thanh toán qua thẻ ngân hàng'),
       ('Thanh toán qua ví điện tử momo');

INSERT INTO `order` (branch_id, customer_id, is_pick_up, order_amount, order_discount_percent, order_discount_value,
                     order_point_earned, order_point_used, order_shiping_free, order_sub_total,
                     payment_method_id, status_id, worker_id, order_created_at, order_delivery_at, order_note,
                     order_address, order_payment_code, order_phone, order_promotion_code)
VALUES (1, 1, false, 60000, 10, 6000, 10, 0, 0, 54000, 1, 1, 1, NOW(), NOW() + INTERVAL 1 DAY, 'Giao hàng nhanh',
        '123 Main St, New York, NY', 'PAY123', '1234567890', ''),
       (2, 2, true, 65000, 5, 3250, 15, 0, 0, 61750, 2, 2, 2, NOW(), NOW() + INTERVAL 2 DAY, 'Nhận tại cửa hàng',
        '456 Sunset Blvd, Los Angeles, CA', 'PAY456', '9876543210', ''),
       (3, 3, false, 70000, 0, 0, 20, 0, 0, 70000, 1, 3, 3, NOW(), NOW() + INTERVAL 3 DAY, 'Giao hàng thường',
        '789 Lakeshore Dr, Chicago, IL', 'PAY789', '5551234567', ''),
       (4, 4, true, 75000, 15, 11250, 25, 0, 0, 63750, 3, 4, 4, NOW(), NOW() + INTERVAL 1 DAY, 'Giao hàng nhanh',
        '101 South St, Miami, FL', 'PAY321', '3216549870', ''),
       (5, 5, false, 80000, 20, 16000, 30, 0, 0, 64000, 2, 5, 5, NOW(), NOW() + INTERVAL 2 DAY, 'Nhận tại cửa hàng',
        '202 East Ave, Boston, MA', 'PAY654', '6543210987', ''),
       (6, 6, false, 90000, 0, 0, 35, 0, 0, 90000, 1, 1, 6, NOW(), NOW() + INTERVAL 3 DAY, 'Giao hàng thường',
        '303 West St, Seattle, WA', 'PAY987', '4567891234', ''),
       (7, 7, true, 95000, 10, 9500, 40, 0, 0, 85500, 2, 2, 7, NOW(), NOW() + INTERVAL 1 DAY, 'Giao hàng nhanh',
        '404 Central Rd, Denver, CO', 'PAY234', '7891234560', ''),
       (8, 8, false, 70000, 5, 3500, 25, 0, 0, 66500, 1, 3, 8, NOW(), NOW() + INTERVAL 2 DAY, 'Nhận tại cửa hàng',
        '505 North St, Minneapolis, MN', 'PAY567', '1597534862', ''),
       (9, 9, true, 85000, 0, 0, 30, 0, 0, 85000, 3, 4, 9, NOW(), NOW() + INTERVAL 3 DAY, 'Giao hàng thường',
        '606 Sunset Blvd, Phoenix, AZ', 'PAY890', '7531598642', ''),
       (10, 10, false, 60000, 0, 0, 10, 0, 0, 60000, 2, 5, 10, NOW(), NOW() + INTERVAL 1 DAY, 'Giao hàng nhanh',
        '707 Bay St, Atlanta, GA', 'PAY1234', '8529637410', '');


INSERT INTO task_status (task_status_name)
VALUES ('Đang chờ'),
       ('Đang thực hiện'),
       ('Đã hoàn thành'),
       ('Đã hủy');

INSERT INTO task (created_at, task_description, done_at, due_date, task_name, start_date, assigned_user_id,
                  created_user_id, task_status_id)
VALUES (NOW(), 'Chuẩn bị nguyên liệu cho món cơm tấm', NULL, '2025-03-15', 'Chuẩn bị nguyên liệu', NOW(), 1, 1, 1),
       (NOW(), 'Lên thực đơn cho tuần tới', NULL, '2025-03-20', 'Lên thực đơn', NOW(), 2, 1, 1),
       (NOW(), 'Kiểm tra hàng tồn kho', NULL, '2025-03-18', 'Kiểm tra hàng tồn', NOW(), 3, 1, 1),
       (NOW(), 'Đặt hàng nguyên liệu mới', NULL, '2025-03-19', 'Đặt hàng nguyên liệu', NOW(), 4, 1, 1),
       (NOW(), 'Tổ chức buổi họp với nhân viên', NULL, '2025-03-22', 'Họp nhân viên', NOW(), 5, 1, 1),
       (NOW(), 'Thực hiện chương trình khuyến mãi', NULL, '2025-03-25', 'Chương trình khuyến mãi', NOW(), 6, 1, 1),
       (NOW(), 'Đánh giá hiệu quả công việc của nhân viên', NULL, '2025-03-30', 'Đánh giá nhân viên', NOW(), 7, 1, 1),
       (NOW(), 'Cập nhật hệ thống quản lý đơn hàng', NULL, '2025-03-28', 'Cập nhật hệ thống', NOW(), 8, 1, 1),
       (NOW(), 'Kiểm tra chất lượng món ăn', NULL, '2025-03-26', 'Kiểm tra chất lượng', NOW(), 9, 1, 1),
       (NOW(), 'Tổ chức sự kiện ra mắt sản phẩm mới', NULL, '2025-04-01', 'Sự kiện ra mắt', NOW(), 10, 1, 1);


INSERT INTO schedule (schedule_date, schedule_description, schedule_name, user_id)
VALUES ('2025-03-14', 'Họp nhóm để thảo luận về kế hoạch kinh doanh', 'Họp nhóm', 1),
       ('2025-03-21', 'Đánh giá tiến độ công việc hàng tháng', 'Đánh giá tiến độ', 2),
       ('2025-03-27', 'Tổ chức buổi đào tạo cho nhân viên', 'Đào tạo nhân viên', 3),
       ('2025-03-29', 'Kiểm tra chất lượng dịch vụ khách hàng', 'Kiểm tra dịch vụ', 4),
       ('2025-04-02', 'Lên kế hoạch cho sự kiện sắp tới', 'Kế hoạch sự kiện', 5),
       ('2025-04-05', 'Tham gia hội chợ thực phẩm', 'Hội chợ thực phẩm', 6),
       ('2025-04-10', 'Gặp gỡ đối tác kinh doanh', 'Gặp gỡ đối tác', 7),
       ('2025-04-15', 'Tổ chức buổi tiệc kỷ niệm công ty', 'Tiệc kỷ niệm', 8),
       ('2025-04-20', 'Đánh giá hiệu quả chương trình khuyến mãi', 'Đánh giá khuyến mãi', 9),
       ('2025-04-25', 'Chuẩn bị tài liệu cho cuộc họp cổ đông', 'Chuẩn bị tài liệu', 10);

INSERT INTO blog_type (blog_type_name)
VALUES ('Tin tức'),
       ('Khuyến mãi'),
       ('Sự kiện'),
       ('Hướng dẫn');

INSERT INTO blog (blog_content, blog_image, blog_status, blog_title, author_user_id, blog_type_blog_type_id)
VALUES ('Chúng tôi rất vui mừng thông báo rằng nhà hàng của chúng tôi đã mở cửa trở lại sau thời gian bảo trì!',
        'image1.jpg', true, 'Mở cửa trở lại', 11, 1),
       ('Khuyến mãi đặc biệt cho tháng này: Giảm giá 20% cho tất cả các món ăn vào cuối tuần!', 'image2.jpg', true,
        'Khuyến mãi tháng', 12, 2),
       ('Tham gia cùng chúng tôi trong sự kiện ẩm thực lớn nhất năm nay vào ngày 10 tháng 4!', 'image3.jpg', true,
        'Sự kiện ẩm thực', 11, 3),
       ('Hướng dẫn cách làm món cơm tấm ngon tại nhà với công thức đơn giản!', 'image4.jpg', true, 'Cách làm cơm tấm',
        11, 4),
       ('Nhà hàng của chúng tôi đã được vinh danh trong danh sách những nhà hàng tốt nhất thành phố!', 'image5.jpg',
        true, 'Vinh danh nhà hàng', 12, 1),
       ('Chúng tôi đã cập nhật thực đơn mới với nhiều món ăn hấp dẫn!', 'image6.jpg', true, 'Thực đơn mới', 2, 1),
       ('Hãy đến tham gia buổi tiệc kỷ niệm 5 năm thành lập nhà hàng vào ngày 15 tháng 5!', 'image7.jpg', true,
        'Tiệc kỷ niệm', 12, 3),
       ('Chương trình khuyến mãi đặc biệt cho các thành viên VIP trong tháng này!', 'image8.jpg', true,
        'Khuyến mãi VIP', 11, 2),
       ('Khám phá các món ăn mới lạ từ đầu bếp nổi tiếng của chúng tôi!', 'image9.jpg', true, 'Món ăn mới', 1, 1),
       ('Những mẹo để có bữa ăn hoàn hảo tại nhà!', 'image10.jpg', true, 'Mẹo bữa ăn', 12, 4);

INSERT INTO promotion_type (promotion_type_name)
VALUES ('Giảm giá'),
       ('Tặng quà'),
       ('Miễn phí vận chuyển'),
       ('người mới');

--
-- #
-- INSERT INTO promotion (promotion_id, created_at, promotion_description, promotion_end_date, promotion_name,
-- #                        promotion_start_date, promotion_status, promotion_discount, promotion_type_id, user_id)
-- # VALUES (UUID(), NOW(), 'Giảm giá 10% cho tất cả các món ăn trong tháng này.', '2025-04-30', 'Giảm giá tháng 4',
-- #         '2025-03-01', true, 10, 1, 11),
-- #        (UUID(), NOW(), 'Tặng một phần nước ngọt miễn phí cho mỗi đơn hàng trên 100.000 VNĐ.', '2025-04-15',
-- #         'Tặng nước ngọt',
-- #         '2025-03-10', true, 0, 2, 12),
-- #        (UUID(), NOW(), 'Miễn phí vận chuyển cho tất cả các đơn hàng trong khu vực nội thành.', '2025-05-01',
-- #         'Miễn phí vận chuyển', '2025-03-15', true, 0, 3, 11),
-- #        (UUID(), NOW(), 'Khuyến mãi đặc biệt cho khách hàng mới: Giảm giá 15% cho đơn hàng đầu tiên.', '2025-04-20',
-- #         'Khách hàng mới', '2025-03-05', true, 15, 4, 12);


INSERT INTO notification_type (notification_type_name)
VALUES ('Thông báo khuyến mãi'),
       ('Thông báo đơn hàng'),
       ('Thông báo giao hàng'),
       ('Thông báo sự kiện'),
       ('Thông báo cập nhật tài khoản'),
       ('Thông báo nhắc nhở'),
       ('Thông báo phản hồi từ khách hàng'),
       ('Thông báo hệ thống');


INSERT INTO notification (notification_content, notification_created_at, notification_is_seen, notification_name,
                          notification_ref_link, notification_type_id, receiver_id, sender_id)
VALUES ('Giảm giá 20% cho tất cả các món ăn vào cuối tuần này!', NOW(), false, 'Khuyến mãi cuối tuần',
        'https://example.com/promotion', 1, 1, 11),
       ('Đơn hàng của bạn đã được xác nhận!', NOW(), false, 'Xác nhận đơn hàng', 'https://example.com/order/1', 2, 1,
        12),
       ('Đơn hàng của bạn đang trên đường giao!', NOW(), false, 'Giao hàng', 'https://example.com/order/1', 3, 1, 12),
       ('Tham gia sự kiện ẩm thực vào ngày 10 tháng 4!', NOW(), false, 'Sự kiện ẩm thực', 'https://example.com/event',
        4, 1, 11),
       ('Cập nhật tài khoản của bạn đã thành công!', NOW(), false, 'Cập nhật tài khoản', 'https://example.com/account',
        5, 1, 12),
       ('Nhắc nhở: Đơn hàng của bạn sẽ đến hạn vào ngày mai!', NOW(), false, 'Nhắc nhở đơn hàng',
        'https://example.com/order/1', 6, 1, 12),
       ('Chúng tôi đã nhận được phản hồi từ bạn. Cảm ơn bạn!', NOW(), false, 'Phản hồi từ khách hàng',
        'https://example.com/feedback', 7, 1, 12),
       ('Hệ thống sẽ bảo trì vào lúc 02:00 sáng ngày mai.', NOW(), false, 'Thông báo bảo trì',
        'https://example.com/system-maintenance', 8, 1, 12);



INSERT INTO order_item (order_id, product_id, expired_feedback_date, feedback, feedback_point, is_feedbacked,
                        note, price, quantity)
VALUES (1, 1, '2025-04-01', NULL, NULL, false, 'Món ăn rất ngon!', 60000, 1),
       (1, 2, '2025-04-01', NULL, NULL, false, 'Rất hài lòng với dịch vụ!', 65000, 1),
       (2, 3, '2025-04-02', NULL, NULL, false, 'Món ăn vừa miệng.', 70000, 1),
       (2, 4, '2025-04-02', NULL, NULL, false, 'Sẽ đặt hàng lần sau.', 75000, 1),
       (3, 5, '2025-04-03', NULL, NULL, false, 'Thích món này!', 60000, 1),
       (3, 6, '2025-04-03', NULL, NULL, false, 'Món ăn rất ngon!', 70000, 1),
       (4, 7, '2025-04-04', NULL, NULL, false, 'Gà nướng rất tuyệt!', 75000, 1),
       (4, 8, '2025-04-04', NULL, NULL, false, 'Hải sản tươi ngon.', 80000, 1),
       (5, 9, '2025-04-05', NULL, NULL, false, 'Bánh flan rất ngon!', 20000, 1),
       (6, 10, '2025-04-06', NULL, NULL, false, 'Món ăn rất hấp dẫn!', 40000, 1);



INSERT INTO black_list (black_list_address, black_list_phone, branch_id)
VALUES ('123 Main St, New York, NY', '1234567890', 1),
       ('456 Sunset Blvd, Los Angeles, CA', '9876543210', 2),
       ('789 Lakeshore Dr, Chicago, IL', '5551234567', 3),
       ('101 South St, Miami, FL', '3216549870', 4),
       ('202 East Ave, Boston, MA', '6543210987', 5),
       ('303 West St, Seattle, WA', '4567891234', 6),
       ('404 Central Rd, Denver, CO', '7891234560', 7),
       ('505 North St, Minneapolis, MN', '1597534862', 8),
       ('606 Sunset Blvd, Phoenix, AZ', '7531598642', 9),
       ('707 Bay St, Atlanta, GA', '8529637410', 10);

INSERT INTO role_history (end_date, is_active, start_date, role_id, user_id, branch_id)
VALUES ('2025-03-31', true, '2025-01-01', 1, 1,1),
       ('2025-03-31', false, '2025-01-01', 2, 1,1),
       ('2025-03-31', false, '2025-01-01', 3, 1,1),
       ('2025-03-31', false, '2025-01-01', 4, 1, null),
       ('2025-03-31', false, '2025-01-01', 5, 1,1),
       ('2025-03-31', false, '2025-01-01', 1, 2,1),
       ('2025-03-31', true, '2025-01-01', 2, 2,1),
       ('2025-03-31', false, '2025-01-01', 3, 2,1),
       ('2025-03-31', false, '2025-01-01', 4, 2,null),
       ('2025-03-31', false, '2025-01-01', 5, 2,1),
       ('2025-03-31', false, '2025-01-01', 1, 3,1),
       ('2025-03-31', false, '2025-01-01', 2, 3,1),
       ('2025-03-31', true, '2025-01-01', 3, 3,1),
       ('2025-03-31', false, '2025-01-01', 4, 3,null),
       ('2025-03-31', false, '2025-01-01', 5, 3,1),
       ('2025-03-31', false, '2025-01-01', 1, 4,1),
       ('2025-03-31', false, '2025-01-01', 2, 4,1),
       ('2025-03-31', false, '2025-01-01', 3, 4,1),
       ('2025-03-31', false, '2025-01-01', 4, 4,null),
       ('2025-03-31', true, '2025-01-01', 5, 4,1),
       ('2025-03-31', false, '2025-01-01', 1, 5,1),
       ('2025-03-31', false, '2025-01-01', 2, 5,1),
       ('2025-03-31', false, '2025-01-01', 3, 5,1),
       ('2025-03-31', false, '2025-01-01', 4, 5, null),
       ('2025-03-31', true, '2025-01-01', 5, 5,1),
       ('2025-03-31', true, '2025-01-01', 6, 6,1),
       ('2025-03-31', true, '2025-01-01', 6, 7,1),
       ('2025-03-31', true, '2025-01-01', 6, 8,1),
       ('2025-03-31', true, '2025-01-01', 6, 9,1),
       ('2025-03-31', true, '2025-01-01', 6, 10,1),
       ('2025-03-31', true, '2025-01-01', 4, 11,null),
       ('2025-03-31', true, '2025-01-01', 1, 12,1),
       ('2025-03-31', true, '2025-01-01', 5, 13,1),
       ('2025-03-31', true, '2025-01-01', 5, 14,1),
       ('2025-03-31', true, '2025-01-01', 5, 15,1),
       ('2025-03-31', true, '2025-01-01', 5, 16,1),
       ('2025-03-31', true, '2025-01-01', 5, 17,1),
       ('2025-03-31', true, '2025-01-01', 4, 18,null);

INSERT INTO branch_product (product_id, quantity, branch_id)
VALUES (1, 1000, 1),
       (2, 1000, 1),
       (3, 1000, 1),
       (4, 1000, 1),
       (5, 1000, 1),
       (6, 1000, 1),
       (7, 1000, 1),
       (8, 1000, 1),
       (9, 1000, 1),
       (10, 1000, 1),
       (11, 1000, 1),
       (12, 1000, 1),
       (13, 1000, 1),
       (14, 1000, 1),
       (15, 1000, 1),
       (16, 1000, 1),
       (1, 1000, 2),
       (2, 1000, 2),
       (3, 1000, 2),
       (4, 1000, 2),
       (5, 1000, 2),
       (6, 1000, 2),
       (7, 1000, 2),
       (8, 1000, 2),
       (9, 1000, 2),
       (10, 1000, 2),
       (11, 1000, 2),
       (12, 1000, 2),
       (13, 1000, 2),
       (14, 1000, 2),
       (15, 1000, 2),
       (16, 1000, 2),
       (1, 1000, 3),
       (2, 1000, 3),
       (3, 1000, 3),
       (4, 1000, 3),
       (5, 1000, 3),
       (6, 1000, 3),
       (7, 1000, 3),
       (8, 1000, 3),
       (9, 1000, 3),
       (10, 1000, 3),
       (11, 1000, 3),
       (12, 1000, 3),
       (13, 1000, 3),
       (14, 1000, 3),
       (15, 1000, 3),
       (16, 1000, 3),
       (1, 1000, 4),
       (2, 1000, 4),
       (3, 1000, 4),
       (4, 1000, 4),
       (5, 1000, 4),
       (6, 1000, 4),
       (7, 1000, 4),
       (8, 1000, 4),
       (9, 1000, 4),
       (10, 1000, 4),
       (11, 1000, 4),
       (12, 1000, 4),
       (13, 1000, 4),
       (14, 1000, 4),
       (15, 1000, 4),
       (16, 1000, 4),
       (1, 1000, 5),
       (2, 1000, 5),
       (3, 1000, 5),
       (4, 1000, 5),
       (5, 1000, 5),
       (6, 1000, 5),
       (7, 1000, 5),
       (8, 1000, 5),
       (9, 1000, 5),
       (10, 1000, 5),
       (11, 1000, 5),
       (12, 1000, 5),
       (13, 1000, 5),
       (14, 1000, 5),
       (15, 1000, 5),
       (16, 1000, 5),
       (1, 1000, 6),
       (2, 1000, 6),
       (3, 1000, 6),
       (4, 1000, 6),
       (5, 1000, 6),
       (6, 1000, 6),
       (7, 1000, 6),
       (8, 1000, 6),
       (9, 1000, 6),
       (10, 1000, 6),
       (11, 1000, 6),
       (12, 1000, 6),
       (13, 1000, 6),
       (14, 1000, 6),
       (15, 1000, 6),
       (16, 1000, 6),
       (1, 1000, 7),
       (2, 1000, 7),
       (3, 1000, 7),
       (4, 1000, 7),
       (5, 1000, 7),
       (6, 1000, 7),
       (7, 1000, 7),
       (8, 1000, 7),
       (9, 1000, 7),
       (10, 1000, 7),
       (11, 1000, 7),
       (12, 1000, 7),
       (13, 1000, 7),
       (14, 1000, 7),
       (15, 1000, 7),
       (16, 1000, 7),
       (1, 1000, 8),
       (2, 1000, 8),
       (3, 1000, 8),
       (4, 1000, 8),
       (5, 1000, 8),
       (6, 1000, 8),
       (7, 1000, 8),
       (8, 1000, 8),
       (9, 1000, 8),
       (10, 1000, 8),
       (11, 1000, 8),
       (12, 1000, 8),
       (13, 1000, 8),
       (14, 1000, 8),
       (15, 1000, 8),
       (16, 1000, 8),
       (1, 1000, 9),
       (2, 1000, 9),
       (3, 1000, 9),
       (4, 1000, 9),
       (5, 1000, 9),
       (6, 1000, 9),
       (7, 1000, 9),
       (8, 1000, 9),
       (9, 1000, 9),
       (10, 1000, 9),
       (11, 1000, 9),
       (12, 1000, 9),
       (13, 1000, 9),
       (14, 1000, 9),
       (15, 1000, 9),
       (16, 1000, 9),
       (1, 1000, 10),
       (2, 1000, 10),
       (3, 1000, 10),
       (4, 1000, 10),
       (5, 1000, 10),
       (6, 1000, 10),
       (7, 1000, 10),
       (8, 1000, 10),
       (9, 1000, 10),
       (10, 1000, 10),
       (11, 1000, 10),
       (12, 1000, 10),
       (13, 1000, 10),
       (14, 1000, 10),
       (15, 1000, 10),
       (16, 1000, 10);

INSERT INTO material_warehouse (material_id, quantity, warehouse_id)
VALUES (1, 100000, 1),
       (1, 100000, 2),
       (1, 100000, 3),
       (1, 100000, 4),
       (1, 100000, 5),
       (1, 100000, 6),
       (1, 100000, 7),
       (1, 100000, 8),
       (1, 100000, 9),
       (1, 100000, 10),
       (2, 100000, 1),
       (2, 100000, 2),
       (2, 100000, 3),
       (2, 100000, 4),
       (2, 100000, 5),
       (2, 100000, 6),
       (2, 100000, 7),
       (2, 100000, 8),
       (2, 100000, 9),
       (2, 100000, 10),
       (3, 100000, 1),
       (3, 100000, 2),
       (3, 100000, 3),
       (3, 100000, 4),
       (3, 100000, 5),
       (3, 100000, 6),
       (3, 100000, 7),
       (3, 100000, 8),
       (3, 100000, 9),
       (3, 100000, 10),
       (4, 100000, 1),
       (4, 100000, 2),
       (4, 100000, 3),
       (4, 100000, 4),
       (4, 100000, 5),
       (4, 100000, 6),
       (4, 100000, 7),
       (4, 100000, 8),
       (4, 100000, 9),
       (4, 100000, 10),
       (5, 100000, 1),
       (5, 100000, 2),
       (5, 100000, 3),
       (5, 100000, 4),
       (5, 100000, 5),
       (5, 100000, 6),
       (5, 100000, 7),
       (5, 100000, 8),
       (5, 100000, 9),
       (5, 100000, 10),
       (6, 100000, 1),
       (6, 100000, 2),
       (6, 100000, 3),
       (6, 100000, 4),
       (6, 100000, 5),
       (6, 100000, 6),
       (6, 100000, 7),
       (6, 100000, 8),
       (6, 100000, 9),
       (6, 100000, 10),
       (7, 100000, 1),
       (7, 100000, 2),
       (7, 100000, 3),
       (7, 100000, 4),
       (7, 100000, 5),
       (7, 100000, 6),
       (7, 100000, 7),
       (7, 100000, 8),
       (7, 100000, 9),
       (7, 100000, 10),
       (8, 100000, 1),
       (8, 100000, 2),
       (8, 100000, 3),
       (8, 100000, 4),
       (8, 100000, 5),
       (8, 100000, 6),
       (8, 100000, 7),
       (8, 100000, 8),
       (8, 100000, 9),
       (8, 100000, 10),
       (9, 100000, 1),
       (9, 100000, 2),
       (9, 100000, 3),
       (9, 100000, 4),
       (9, 100000, 5),
       (9, 100000, 6),
       (9, 100000, 7),
       (9, 100000, 8),
       (9, 100000, 9),
       (9, 100000, 10),
       (10, 100000, 1),
       (10, 100000, 2),
       (10, 100000, 3),
       (10, 100000, 4),
       (10, 100000, 5),
       (10, 100000, 6),
       (10, 100000, 7),
       (10, 100000, 8),
       (10, 100000, 9),
       (10, 100000, 10);

INSERT INTO product_recipes (material_id, product_id, quantity)
VALUES
-- Cơm tấm sườn nướng
(1, 1, 200),  -- thịt nướng
(5, 1, 300),  -- gạo
(9, 1, 5),    -- muối

-- Cơm tấm bì chả
(1, 2, 150),  -- thịt nướng
(2, 2, 100),  -- cà chua
(5, 2, 300),  -- gạo
(10, 2, 5),   -- bún

-- Cơm tấm thịt kho trứng
(1, 3, 200),  -- thịt nướng
(5, 3, 300),  -- gạo
(6, 3, 2),    -- cà rốt

-- Cơm tấm gà nướng
(1, 4, 200),  -- thịt nướng
(5, 4, 300),  -- gạo
(9, 4, 3),    -- muối

-- Cơm tấm chả lụa
(1, 5, 150),  -- thịt nướng
(5, 5, 300),  -- gạo
(6, 5, 2),    -- cà rốt

-- Cơm tấm xíu mại
(1, 6, 150),  -- thịt nướng
(5, 6, 300),  -- gạo
(3, 6, 100),  -- tôm

-- Cơm tấm đùi gà
(1, 7, 200),  -- thịt nướng
(5, 7, 300),  -- gạo
(9, 7, 3),    -- muối

-- Cơm tấm hải sản
(3, 8, 200),  -- tôm
(5, 8, 300),  -- gạo
(10, 8, 5),   -- bún

-- Bánh flan
(2, 9, 50),   -- cà chua
(5, 9, 100),  -- gạo

-- Canh chua cá
(8, 10, 150), -- cá hồi
(2, 10, 100), -- cà chua
(5, 10, 200), -- gạo

-- Trà sữa
(6, 11, 50),  -- cà rốt
(5, 11, 100), -- gạo

-- Phở bò
(6, 12, 200), -- cà rốt
(5, 12, 300), -- gạo
(1, 12, 150), -- thịt nướng

-- Mì xào hải sản
(3, 13, 150), -- tôm
(4, 13, 100), -- mì chính
(5, 13, 200), -- gạo

-- Kem tươi
(2, 14, 50),  -- cà chua
(5, 14, 100), -- gạo

-- Salad rau củ
(2, 15, 100), -- cà chua
(6, 15, 50),  -- cà rốt

-- Nước ép trái cây
(2, 16, 100); -- cà chua
