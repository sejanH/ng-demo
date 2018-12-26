CREATE TABLE USER_MAIN(
    user_id bigInt primary key auto_increment,
    username varchar(20) not null unique,
    password varchar(100) not null,
    user_active varchar(2) default 'Y',
    user_role varchar(100) default '1',
    created_at datetime default NOW()
);

create table user_info(
    user_id bigInt not null,
    full_name varchar(255),
    email varchar(255) not null,
    country varchar(10),
    city varchar(10),
    address varchar(255),
    dob date default '1993-01-01',
    foreign key (user_id) references user_main(user_id)
);