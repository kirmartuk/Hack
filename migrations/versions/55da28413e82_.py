"""empty message

Revision ID: 55da28413e82
Revises: 97f6b7395217
Create Date: 2020-10-30 18:51:26.644577

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '55da28413e82'
down_revision = '97f6b7395217'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('shelter', sa.Column('address', sa.String(length=255), nullable=False))
    op.add_column('shelter', sa.Column('adm_area', sa.String(length=255), nullable=False))
    op.add_column('shelter', sa.Column('chief_name', sa.String(length=127), nullable=False))
    op.add_column('shelter', sa.Column('clarification_of_work', sa.String(length=511), nullable=True))
    op.add_column('shelter', sa.Column('departmental_affiliation', sa.Integer(), nullable=False))
    op.add_column('shelter', sa.Column('district', sa.String(length=127), nullable=False))
    op.add_column('shelter', sa.Column('geo_data', sa.String(length=255), nullable=False))
    op.add_column('shelter', sa.Column('global_id', sa.Integer(), nullable=False))
    op.add_column('shelter', sa.Column('phone', sa.String(length=15), nullable=False))
    op.add_column('shelter', sa.Column('working_hours', sa.String(length=511), nullable=False))
    op.create_index(op.f('ix_shelter_address'), 'shelter', ['address'], unique=False)
    op.create_index(op.f('ix_shelter_adm_area'), 'shelter', ['adm_area'], unique=False)
    op.create_index(op.f('ix_shelter_clarification_of_work'), 'shelter', ['clarification_of_work'], unique=False)
    op.create_index(op.f('ix_shelter_departmental_affiliation'), 'shelter', ['departmental_affiliation'], unique=False)
    op.create_index(op.f('ix_shelter_district'), 'shelter', ['district'], unique=False)
    op.create_index(op.f('ix_shelter_global_id'), 'shelter', ['global_id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_shelter_global_id'), table_name='shelter')
    op.drop_index(op.f('ix_shelter_district'), table_name='shelter')
    op.drop_index(op.f('ix_shelter_departmental_affiliation'), table_name='shelter')
    op.drop_index(op.f('ix_shelter_clarification_of_work'), table_name='shelter')
    op.drop_index(op.f('ix_shelter_adm_area'), table_name='shelter')
    op.drop_index(op.f('ix_shelter_address'), table_name='shelter')
    op.drop_column('shelter', 'working_hours')
    op.drop_column('shelter', 'phone')
    op.drop_column('shelter', 'global_id')
    op.drop_column('shelter', 'geo_data')
    op.drop_column('shelter', 'district')
    op.drop_column('shelter', 'departmental_affiliation')
    op.drop_column('shelter', 'clarification_of_work')
    op.drop_column('shelter', 'chief_name')
    op.drop_column('shelter', 'adm_area')
    op.drop_column('shelter', 'address')
    # ### end Alembic commands ###
