if Rails.env.production? || ENV['FORCE_AMAZON_AWS'] 
  CarrierWave.configure do |config|
    config.storage = :fog
    config.fog_provider = 'fog/aws'
    config.fog_credentials = {
      :provider               => 'AWS',       # required
      :aws_access_key_id      => ENV['AWS_ACCESS_KEY_ID'],       # required
      :aws_secret_access_key  => ENV['AWS_SECRET_ACCESS_KEY'],       # required
    }
    config.fog_directory  = ENV['AWS_S3_BUCKET']                     # required

  end
else
  CarrierWave.configure do |config|
    config.storage = :file
  end
end
