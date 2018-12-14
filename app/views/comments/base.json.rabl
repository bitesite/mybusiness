attributes :id, :name, :body

if admin?
  attributes :email
end