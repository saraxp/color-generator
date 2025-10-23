# for sql alchemy models

from sqlalchemy import Column, Integer, String, JSON, DateTime, func
from utils.database import Base

class Palette(Base):
    __tablename__ = "palettes"

    id = Column(Integer, primary_key=True, index=True) 
    scheme_type = Column(String, index=True)
    colors = Column(JSON)
    created_at = Column(DateTime(timezone=True), server_default=func.now())