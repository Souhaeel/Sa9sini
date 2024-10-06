
/*dummydata to use*/

INSERT INTO Users (userName, image, email, password) VALUES 
('John Doe', 'https://randomuser.me/api/portraits/men/1.jpg', 'john.doe@example.com', 'password1'),
('Jane Smith', 'https://randomuser.me/api/portraits/women/1.jpg', 'jane.smith@example.com', 'password2'),
('Michael Brown', 'https://randomuser.me/api/portraits/men/2.jpg', 'michael.brown@example.com', 'password3'),
('Emily Davis', 'https://randomuser.me/api/portraits/women/2.jpg', 'emily.davis@example.com', 'password4'),
('William Johnson', 'https://randomuser.me/api/portraits/men/3.jpg', 'william.johnson@example.com', 'password5'),
('Olivia Wilson', 'https://randomuser.me/api/portraits/women/3.jpg', 'olivia.wilson@example.com', 'password6'),
('James Taylor', 'https://randomuser.me/api/portraits/men/4.jpg', 'james.taylor@example.com', 'password7'),
('Sophia Martinez', 'https://randomuser.me/api/portraits/women/4.jpg', 'sophia.martinez@example.com', 'password8'),
('Benjamin Lee', 'https://randomuser.me/api/portraits/men/5.jpg', 'benjamin.lee@example.com', 'password9'),
('Isabella Anderson', 'https://randomuser.me/api/portraits/women/5.jpg', 'isabella.anderson@example.com', 'password10'),
('Liam White', 'https://randomuser.me/api/portraits/men/6.jpg', 'liam.white@example.com', 'password11'),
('Ava Thompson', 'https://randomuser.me/api/portraits/women/6.jpg', 'ava.thompson@example.com', 'password12'),
('Henry Harris', 'https://randomuser.me/api/portraits/men/7.jpg', 'henry.harris@example.com', 'password13'),
('Mia Clark', 'https://randomuser.me/api/portraits/women/7.jpg', 'mia.clark@example.com', 'password14'),
('Lucas Lewis', 'https://randomuser.me/api/portraits/men/8.jpg', 'lucas.lewis@example.com', 'password15'),
('Charlotte Robinson', 'https://randomuser.me/api/portraits/women/8.jpg', 'charlotte.robinson@example.com', 'password16'),
('Elijah Walker', 'https://randomuser.me/api/portraits/men/9.jpg', 'elijah.walker@example.com', 'password17'),
('Amelia Scott', 'https://randomuser.me/api/portraits/women/9.jpg', 'amelia.scott@example.com', 'password18'),
('Noah Young', 'https://randomuser.me/api/portraits/men/10.jpg', 'noah.young@example.com', 'password19'),
('Harper King', 'https://randomuser.me/api/portraits/women/10.jpg', 'harper.king@example.com', 'password20');


INSERT INTO Questions (Question, category, QuestionDate, `Like`, isLiked, userId) VALUES 
('What is the capital of France?', 'General', NOW(), 0, FALSE, 1),
('What is the largest ocean on Earth?', 'General', NOW(), 0, FALSE, 2),
('Who wrote "Pride and Prejudice"?', 'Entertainment', NOW(), 0, FALSE, 3),
('What is the square root of 64?', 'General', NOW(), 0, FALSE, 4),
('Who discovered penicillin?', 'Science', NOW(), 0, FALSE, 5),
('What is the tallest mountain in the world?', 'General', NOW(), 0, FALSE, 6),
('When was the first manned moon landing?', 'General', NOW(), 0, FALSE, 7),
('What is the fastest land animal?', 'General', NOW(), 0, FALSE, 8),
('Which element has the chemical symbol O?', 'Science', NOW(), 0, FALSE, 9),
('What is the smallest country in the world?', 'General', NOW(), 0, FALSE, 10),
('Who painted the Mona Lisa?', 'Entertainment', NOW(), 0, FALSE, 11),
('What is the speed of light?', 'Science', NOW(), 0, FALSE, 12),
('What is the longest river in the world?', 'General', NOW(), 0, FALSE, 13),
('Who invented the telephone?', 'Technology', NOW(), 0, FALSE, 14),
('What is the hardest natural substance?', 'Science', NOW(), 0, FALSE, 15),
('What is the most abundant gas in Earth’s atmosphere?', 'Science', NOW(), 0, FALSE, 16),
('What planet is known as the Red Planet?', 'General', NOW(), 0, FALSE, 17),
('How many continents are there?', 'General', NOW(), 0, FALSE, 18),
('Which planet is closest to the sun?', 'General', NOW(), 0, FALSE, 19),
('What is the difference between health and wellness?', 'Health', NOW(), 0, FALSE, 20);



INSERT INTO Answers (Answer, AnswersDate, userId, questionId) VALUES 
('Paris', NOW(), 1, 1), 
('Pacific Ocean', NOW(), 2, 2), 
('Jane Austen', NOW(), 3, 3), 
('Eight', NOW(), 4, 4), 
('Alexander Fleming', NOW(), 5, 5), 
('Mount Everest', NOW(), 6, 6), 
('1969', NOW(), 7, 7), 
('Cheetah', NOW(), 8, 8), 
('Oxygen', NOW(), 9, 9), 
('Vatican City', NOW(), 10, 10), 
('Leonardo da Vinci', NOW(), 11, 11), 
('299,792,458 m/s', NOW(), 12, 12), 
('Nile River', NOW(), 13, 13), 
('Alexander Graham Bell', NOW(), 14, 14), 
('Diamond', NOW(), 15, 15), 
('Nitrogen', NOW(), 16, 16), 
('Mars', NOW(), 17, 17), 
('Seven', NOW(), 18, 18), 
('George Washington', NOW(), 19, 19), 
('Mercury', NOW(), 20, 20);