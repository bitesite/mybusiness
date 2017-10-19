# Create Roles
['admin', 'staff', 'supervisor'].each do |role_name|
  Role.create(name: role_name)
end