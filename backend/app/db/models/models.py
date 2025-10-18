# app/db/models.py
from sqlalchemy import Column, Integer, String, Float, Date
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Movie(Base):
    __tablename__ = "Dim_Movies"

    Movie_ID = Column(Integer, primary_key=True, index=True)
    Title = Column(String, nullable=False)
    Overview = Column(String)
    Date_Released = Column(Date)
    #Popularity = Column(Float)
    #Vote_AVG= Column(Float)
    #Vote_Count = Column(Integer)
