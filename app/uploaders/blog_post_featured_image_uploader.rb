class BlogPostFeaturedImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::RMagick
  
  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  process :resize_to_limit => [600, 600]

  def extension_white_list
    %w(jpg jpeg gif png)
  end
end
