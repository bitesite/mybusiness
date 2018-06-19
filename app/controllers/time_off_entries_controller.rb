class TimeOffEntriesController < ApplicationController
  
  load_and_authorize_resource through: :current_user, except: [:bulk_new, :bulk_create, :approve]
  layout 'non_landing'

  def index
    if supervisor?
      @pending_time_off_entries = TimeOffEntry.pending
      @approved_time_off_entries = TimeOffEntry.approved
    end
  end

  def new
  end

  def bulk_new
  end

  def bulk_create
    
    start_date = Date.new(params[:start_date][:year].to_i, params[:start_date][:month].to_i, params[:start_date][:day].to_i)
    end_date = Date.new(params[:end_date][:year].to_i, params[:end_date][:month].to_i, params[:end_date][:day].to_i)
    
    number_of_days = (end_date - start_date).to_i

    (0..number_of_days).each do |i|
      entry_date = start_date + i.days

      if entry_date.wday != 0 && entry_date.wday != 6
        time_off_entry = current_user.time_off_entries.build({ entry_date: start_date + i.days,
                                                               time_off_type: params[:time_off_type],
                                                               amount: 1.0,
                                                               notes: params[:notes] })
        time_off_entry.status = 'Pending'
        time_off_entry.save
      end
    end

    redirect_to time_off_entries_path
  end

  def edit
    if @time_off_entry.status == 'Approved'
      redirect_to time_off_entries_path, notice: "You can't edit an approved request."
    end
  end

  def create
    @time_off_entry.status = 'Pending'
    if @time_off_entry.save
      redirect_to time_off_entries_path, notice: 'Time off successfully requested!'
    else
      render :new
    end
  end

  def update
    if @time_off_entry.status == 'Approved'
      redirect_to time_off_entries_path, notice: "You can't update an approved request."
    else
      if @time_off_entry.update_attributes(time_off_entry_params)
        redirect_to time_off_entries_path, notice: "Time off request successfully updated."
      else
        render :edit
      end
    end
  end

  def approve
    @time_off_entry = TimeOffEntry.find params[:id]
    @time_off_entry.status = "Approved"
    @time_off_entry.save
    redirect_to time_off_entries_path
  end

  def destroy
    if @time_off_entry.status == 'Approved'
      redirect_to time_off_entries_path, notice: "You can't delete an approved request."
    else
      @time_off_entry.destroy
      redirect_to time_off_entries_path, notice: "Time off request successfully deleted."
    end
  end

  private
    def time_off_entry_params
      params.require(:time_off_entry).permit(:amount, :entry_date, :notes, :time_off_type, :user_id)
    end
end
