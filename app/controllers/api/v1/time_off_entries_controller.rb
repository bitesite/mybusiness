class Api::V1::TimeOffEntriesController < Api::V1::ApplicationController
  include TimeOffEntriesHelpers

  respond_to :json
  
  before_action :authenticate_request!
  load_and_authorize_resource through: :current_user, except: [:approve]
  load_and_authorize_resource only: [:approve]

  def index
    if params[:pending_reports_entries]
      @include_user_info = true
      @time_off_entries = TimeOffEntry.where(user_id: current_user.direct_reports.map{|user| user.id}).where(status: 'Pending').order(entry_date: :asc)
    end

    @time_off_entries = @time_off_entries.limit(params[:limit]) if params[:limit]
    @time_off_entries = @time_off_entries.offset(params[:offset]) if params[:offset]

    if @include_user_info
      @time_off_entries = @time_off_entries.includes(user: [:profile])
    end
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

    notify_supervisor_of_new_time_off_entries

    head 200
  end
  
  def approve
    @time_off_entry = TimeOffEntry.find params[:id]
    @time_off_entry.status = "Approved"
    
    @time_off_entry.save
    notify_staff_of_approved_time_off_entries
    
    head 200
  end
end