# for sql alchemy models

from sqlalchemy import Column, Integer, String, JSON # type: ignore
from ..utils.database import Base

class Palette(Base):
    __tablename__ = "palettes"

    id = Column(Integer, primary_key=True, index=True) 
    scheme_type = Column(String, index=True)
    colors = Column(JSON)