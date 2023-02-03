class CaseStudiesController < ApplicationController
  def show
    @case_study = CaseStudy.find(params[:id])

    respond_to do |format|
      format.html { render :show }
      format.json { render :show }
    end
  end

  def index
    @case_studies = CaseStudy.all
    respond_to do |format|
      format.html { render :index }
      format.json { render :index }
    end
  end

  def testimonial
  end

  def international_safety
    @title = "International Safety Website - Case Study"
  end

  def mydoma
    @title = "Mydoma Studio Video - Case Study"
  end

  def splice
    @title = "Splice Web Application - Case Study"
  end

  def lspark_grad
    @title = "L-SPARK Grad Video - Case Study"
  end

  def lspark
    @title = "L-SPARK - Case Study"
  end

  def d3m
    @title = "Teldio D3M - Case Study"
  end

  def martello
    @title = "Martello All Devices Video - Case Study"
  end

  def curtiss_wright
    @title = "Curtiss-Wright Defense Solutions TLCM Video - Case Study"
  end

  def ewa
    @title = "Enterprise Wireless Alliance Cevo GO Video - Case Study"
  end

  def solink
    @title = "Solink Explainer Video - Case Study"
  end

  def christine_kelly
    @title = "Christine Kelly PHD Web Application"
  end

  def filefacets
    @title = "FileFacets How it works Video"
  end

  def inspec_homes
    @title = "Inspec Homes Web Application"
  end
end
