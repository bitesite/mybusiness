class Api::V1::TimeOffEntriesController < Api::V1::ApplicationController
  include TimeOffEntriesHelpers

  respond_to :json
  
  before_action :authenticate_request!
  load_and_authorize_resource through: :current_user

  def index
    @time_off_entries = @time_off_entries.limit(params[:limit]) if params[:limit]
    @time_off_entries = @time_off_entries.offset(params[:offset]) if params[:offset]
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
end