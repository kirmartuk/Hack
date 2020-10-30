import json
import enum

from app import db

class types(enum.Enum):
    cat = 1
    dog = 2

class roles(enum.Enum):
    user = 1
    admin = 2

class documents(enum.Enum):
    kal = 1
    shmal = 2
    onal = 3
    
class AnimalPhoto(db.Model):
    __tablename__ = 'animal_photo'
    id = db.Column(db.Integer, primary_key=True)
    link_to_photo = db.Column(db.String(80), nullable=False)

    def get_all_photos():
        return AnimalPhoto.query.all()

    def get_photo(_id):
        return AnimalPhoto.query.filter_by(id=_id).first()

    def add_photo(_link):
        new_photo = AnimalPhoto(link_to_photo=_link)
        db.session.add(new_photo)
        db.session.commit()

    def delete_photo(_id):
        result = AnimalPhoto.query.filter_by(id=_id).delete()
        db.session.commit()
        return bool(result)

    def update_photo(_id, _link):
        AnimalPhoto.query.filter_by(id=_id).first().link_to_photo = _link
        db.session.commit()

    def __repr__(self):
        return "item with id{0}".format(self.id)

class AnimalType(db.Model):
    __tablename__ = 'animal_type'
    id = db.Column(db.Integer, primary_key=True)
    atype = db.Column(db.Enum(types), index=True, nullable=False)

    def get_all_types():
        return AnimalType.query.all()

    def get_type(_id):
        return AnimalType.query.filter_by(id=_id).first()

    def add_type(_type):
        new_type = AnimalType(atype=_type)
        db.session.add(new_type)
        db.session.commit()

    def delete_type(_id):
        result = AnimalType.query.filter_by(id=_id).delete()
        db.session.commit()
        return bool(result)

    def update_type(_id, _type):
        AnimalType.query.filter_by(id=_id).first().atype = _type
        db.session.commit()

    def __repr__(self):
        return "item with id {0}".format(self.id)

class AnimalBreed(db.Model):
    __tablename__ = 'animal_breed'
    id = db.Column(db.Integer, primary_key=True)
    breed = db.Column(db.String(48), nullable=False)
    animal_type = db.Column(db.Integer, db.ForeignKey('animal_type.id'), nullable=False)

    def get_all_breeds():
        return AnimalBreed.query.all()

    def get_breed(_id):
        return AnimalBreed.query.filter_by(id=_id).first()

    def add_breed(_breed, _animal_type):
        new_breed = AnimalBreed(breed=_breed, animal_type=_animal_type)
        db.session.add(new_breed)
        db.session.commit()

    def delete_breed(_id):
        result = AnimalBreed.query.filter_by(id=_id).delete()
        db.session.commit()
        return bool(result)

    def update_breed(_id, _breed, _animal_type):
        animal = AnimalBreed.query.filter_by(id=_id).first()
        animal.breed = _breed
        animal.animal_type = _animal_type
        db.session.commit()

    def __repr__(self):
        return "item with id{0}".format(self.id)

class Animal(db.Model):
    __tablename__ = 'animal'
    id = db.Column(db.Integer, primary_key=True)
    age = db.Column(db.Integer, index=True, nullable=False)
    nickname = db.Column(db.String(45), index=True, nullable=False)
    male = db.Column(db.Integer, index=True, nullable=False)
    special_signs = db.Column(db.String(250))
    size = db.Column(db.Enum(types))
    character = db.Column(db.String(45))
    animal_type = db.Column(db.Integer, db.ForeignKey('animal_type.id'), nullable=False)
    animal_breed = db.Column(db.Integer, db.ForeignKey('animal_breed.id'), nullable=False)
    shelter = db.Column(db.Integer, db.ForeignKey('shelter.id'), nullable=False)
    ready = db.Column(db.Integer, index=True, nullable=False)

    def get_all_animals():
        return Animal.query.all()

    def get_animal(_id):
        return Animal.query.filter_by(id=_id).first()

    def add_animal(_age, _nickname, _male, _special_signs, _size, _character, _animal_type, _animal_breed, _shelter, _ready):
        new_animal = Animal(age=_age, nickname=_nickname, male=_male, special_signs=_special_signs, size=_size, character=_character, animal_type=_animal_type, animal_breed=_animal_breed, shelter=_shelter, ready=_ready)
        db.session.add(new_animal)
        db.session.commit()

    def delete_animal(_id):
        result = Animal.query.filter_by(id=_id).delete()
        db.session.commit()
        return bool(result)

    def __repr__(self):
        return "item with id{0}".format(self.id)

class Shelter(db.Model):
    __tablename__ = 'shelter'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    global_id = db.Column(db.Integer, index=True, nullable=False)
    departmental_affiliation = db.Column(db.Integer, index=True, nullable=False)
    adm_area = db.Column(db.String(255), index=True, nullable=False)
    district = db.Column(db.String(127), index=True, nullable=False)
    address = db.Column(db.String(255), index=True, nullable=False)
    phone = db.Column(db.String(15), nullable=False)
    chief_name = db.Column(db.String(127), nullable=False)
    working_hours = db.Column(db.String(511), nullable=False)
    clarification_of_work = db.Column(db.String(511), index=True)
    geo_data = db.Column(db.String(255), nullable=False)

    def get_all_shelters():
        return Shelter.query.all()

    def get_shelter(_id):
        return Shelter.query.filter_by(id=_id).first()

    def add_shelter(_name, _global_id, _departamental_affiliation, _adm_area, _district, _address, _phone, _chief_name, _working_hours, _clarification_of_work, _geo_data):
        new_shelter = Shelter(name=_name, global_id=_global_id, departmental_affiliation=_departamental_affiliation, adm_area=_adm_area, district=_district, address=_address, phone=_phone, chief_name=_chief_name, working_hours=_working_hours, clarification_of_work=_clarification_of_work, geo_data=_geo_data)
        db.session.add(new_shelter)
        db.session.commit()

    def delete_shelter(_id):
        result = Shelter.query.filter_by(id=_id).delete()
        db.session.commit()
        return bool(result)

    def __repr__(self):
        return "item with name{0}".format(self.name)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String(45), index=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(45), index=True, nullable=False)
    surname = db.Column(db.String(45), index=True, nullable=False)
    role = db.Column(db.Enum(roles), index=True)
    shelter = db.Column(db.Integer, db.ForeignKey('shelter.id'), nullable=False)

    def get_all_users():
        return User.query.all()

    def get_user(_id):
        return User.query.filter_by(id=_id).first()

    def add_user(_login, _password, _name, _surname, _role, _shelter):
        new_user = User(login=_login, password=_password, name=_name, surname=_surname, role=_role, shelter=_shelter)
        db.session.add(new_user)
        db.session.commit()

    def delete_user(_id):
        result = User.query.filter_by(id=_id).delete()
        db.session.commit()
        return bool(result)

    def __repr__(self):
        return "item with id{0}".format(self.id)

class PetRequest(db.Model):
    __tablename__ = 'pet_request'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45), index=True, nullable=False)
    phone = db.Column(db.String(15), nullable=False)
    comment = db.Column(db.String(250), nullable=False)
    animal = db.Column(db.Integer, db.ForeignKey('animal.id'), nullable=False)

    def get_all_requests():
        return PetRequest.query.all()

    def get_request(_id):
        return PetRequest.query.filter_by(id=_id).first()

    def add_request(_name, _phone, _comment, _animal):
        new_request(name=_name, phone=_phone, comment=_comment, animal=_animal)
        db.session.add(new_request)
        db.session.commit()

    def delete_request(_id):
        result = PetRequest.query.filter_by(id=_id).delete()
        db.session.commit()
        return bool(result)

    def __repr__(self):
        return "item with id{0}".format(self.id)

class Document(db.Model):
    __tablename__ = 'document'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, index=True, nullable=False)
    link_to_document = db.Column(db.String(2000), nullable=False)
    animal = db.Column(db.Integer, index=True, nullable=False)
    document_type = db.Column(db.Enum(documents), index=True)

    def get_all_animals():
        return Animal.query.all()

    def get_animals(_id):
        return Animal.query.filter_by(id=_id).first()

    def add_animal(_age, _nickname, _male, _special_signs, _size, _character, _animal_type, _animal_breed, _shelter, _ready):
        new_animal = Animal(age=_age, nickname=_nickname, male=_male, special_signs=_special_signs, size=_size, character=_character, animal_type=_animal_type, animal_breed=_animal_breed, shelter=_shelter, ready=_ready)
        db.session.add(new_animal)
        db.session.commit()

    def delete_animal(_id):
        result = Animal.query.filter_by(id=_id).delete()
        db.session.commit()
        return bool(result)

    def __repr__(self):
        return "item with id{0}".format(self.id)
