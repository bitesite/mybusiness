class ProductsController < ApplicationController
  def index
    @products = Product.all
    respond_to do |format|
      format.html { render :index }
      format.json { render :index }
    end
  end
end
