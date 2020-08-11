class User < ApplicationRecord

    validates :name, :username, :email, presence: true 
    validates :username, length: {in: 6..12}

end
